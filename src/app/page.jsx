import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
export default function Home() {
  return (
    <main>

      <Link href="/login"><Button>Press me</Button></Link>
    </main>
  );
}
