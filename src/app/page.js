import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Bonjour tout le monde !</h2>
      <p>
        Pour accéder à vos exerices cliquez{" "}
        <Link href="/exercices" className="link">ici</Link>
      </p>
    </div>
  );
}
