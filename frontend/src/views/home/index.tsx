import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Main>
      <div className="h-10000">
        <Button
          onClick={() =>
            navigate({ to: "/workflows/$Id", params: { Id: "12323" } })
          }
        >
          dddd
        </Button>
      </div>
    </Main>
  );
}
