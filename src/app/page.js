import Link from "next/link";
import H1 from "@/components/H1";
import P from "@/components/P";

export default function Home() {
  return (
    <div>
      <H1>Bonjour tout le monde !</H1>
      <P>
        Pour accéder à vos exerices cliquez{" "}
        <Link href="/exercices" className="link">
          ici
        </Link>
      </P>
    </div>
  );
}
