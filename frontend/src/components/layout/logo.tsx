import { useNavigate } from "@tanstack/react-router";
import { Cpu } from "lucide-react";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => navigate({ to: "/" })}
    >
      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
        <Cpu className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-black">AI-WorkFlow</span>
    </div>
  );
}
