import Link from "next/link";


export default function Home() {

 const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main className="h-screen">
      <h1 className="text-xl">My Cool React Site</h1>
      <p>Shopping List</p>
      <h2>Application Links</h2>
      <ul>
        <li><Link className={linkStyles} href="./week-2/">Week 2</Link></li>
        <li><Link className={linkStyles} href="./week-3/">Week 3</Link></li>
        <li><Link className={linkStyles} href="./week-4/functions">Week 4 - Functions</Link></li>
        <li><Link className={linkStyles} href="./week-4/counter">Week 4 - Counter</Link></li>
        <li><Link className={linkStyles} href="./week-4/managed-form">Week 4 - Dog Form</Link></li>
      </ul>
    </main>
  );
}
