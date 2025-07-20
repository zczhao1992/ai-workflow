import { useParams } from "@tanstack/react-router";
import Editor from "./components/Editor";

export default function WorkFlow() {
  const { Id } = useParams({ strict: false });
  console.log("🚀 ~ WorkFlow ~ id:", Id);

  return <Editor workflowId={Id as string} />;
}
