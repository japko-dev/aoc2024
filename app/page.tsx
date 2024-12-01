import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href="/task/1">Task 1</Link>
      </Button>
    </div>
  );
}
