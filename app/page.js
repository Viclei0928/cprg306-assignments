import Link from "next/link";


export default function Home() {

 const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen">
      <h1 className="text-xl">My Cool React Site</h1>
      <p>Hello World!</p>
      <h2>Application Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./week2/">Week 2</Link></li>
        <li><Link className={linkStyles} href="./week3/">Week 3</Link></li>
      </ul>
    </main>
  );
}
