import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-teal-500 text-[50px]">Intro to Next.Js</h1>
      <p>We are learning Typescript and Tailwind.css</p>
      <Link href={"/about"}>About us</Link>
    </div>
  );
}
