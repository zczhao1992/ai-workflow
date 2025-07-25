import { useCallback, useEffect } from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  type Connection,
  Controls,
  type Edge,
  //   getOutgoers,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { TaskType } from "@/types/task";
import { type AppNode } from "@/types/appNode";
import NodeComponent from "./nodes/NodeComponent";
import DeletableEdge from "./edges/DeletableEdge";
import { CreateFlowNode } from "@/lib/workflow/createFlowNode";

import "@xyflow/react/dist/style.css";

// // 节点
const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};
// 连线
const edgeTypes = {
  default: DeletableEdge,
};

const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

export default function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { setViewport, screenToFlowPosition, updateNodeData } = useReactFlow();

  useEffect(() => {
    try {
      // const flow = JSON.parse(
      //   '{"nodes":[{"id":"983cf5cf-54c8-4096-8510-e58ae1f2b464","type":"FlowScrapeNode","dragHandle":".drag-handle","data":{"type":"LAUNCH_BROWSER","inputs":{"Website Url":"https://www.baidu.com"}},"position":{"x":-350,"y":-50},"measured":{"width":420,"height":219},"selected":false,"dragging":false}],"edges":[],"viewport":{"x":544.5616438356165,"y":185.70000076293945,"zoom":0.6735159817351597}}'
      // );
      let flow = null;
      if (!flow) return;

      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);

      if (!flow.viewport) return;

      const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      setViewport({ x, y, zoom });
    } catch (error) {}

    //workflow.definition,
  }, [setEdges, setNodes, setViewport]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const taskType = e.dataTransfer.getData("application/reactflow");
      if (typeof taskType === undefined || !taskType) return;

      const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });

      const newNode = CreateFlowNode(taskType as TaskType, position);
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );
  // 链接节点
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
      if (!connection.targetHandle) return;

      const node = nodes.find((nd) => nd.id === connection.target);
      if (!node) return;

      const nodeInputs = node.data.inputs;
      updateNodeData(node.id, {
        inputs: {
          ...nodeInputs,
          [connection.targetHandle]: "",
        },
      });
    },
    [setEdges, updateNodeData, nodes]
  );

  // 节点校验
  //   const isValidConnection = useCallback(
  //     (connection: Edge | Connection) => {
  //       if (connection.source === connection.target) {
  //         return false;
  //       }

  //       const source = nodes.find((node) => node.id === connection.source);
  //       const target = nodes.find((node) => node.id === connection.target);
  //       if (!source || !target) {
  //         console.error("节点未找到");
  //         return false;
  //       }

  //       const sourceTask = TaskRegistry[source.data.type];
  //       const targetTask = TaskRegistry[target.data.type];

  //       const output = sourceTask.outputs.find(
  //         (o) => o.name === connection.sourceHandle
  //       );
  //       const input = targetTask.inputs.find(
  //         (i) => i.name === connection.targetHandle
  //       );

  //       if (input?.type !== output?.type) {
  //         console.error("节点不匹配");
  //         return false;
  //       }

  //       const hasCycle = (node: AppNode, visited = new Set()) => {
  //         if (visited.has(node.id)) return false;
  //         visited.add(node.id);

  //         for (const outgoer of getOutgoers(node, nodes, edges)) {
  //           if (outgoer.id === connection.source) return true;
  //           if (hasCycle(outgoer, visited)) return true;
  //         }
  //       };

  //       const detectedCycle = hasCycle(target);

  //       return !detectedCycle;
  //     },
  //     [nodes, edges]
  //   );

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        snapToGrid
        snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOptions}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onConnect={onConnect}
        // isValidConnection={isValidConnection}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}
