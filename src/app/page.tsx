import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snippet = await prisma.snippet.findMany();

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className=" m-2">
          <h1 className="text-4xl font-bold pb-12 underline"> Home </h1>
          <h1 className="text-xl font-semibold">Snippets</h1>
        </div>
        <div className="">
          <Link href={"/snippet/new"}><Button>New</Button></Link>
        </div>
      </div>
      {
        snippet.map((s) =>
          <div key={s.id} className="mt-10 items-center flex justify-between bg-slate-200 p-4 rounded-md">
            <div>
              <h1 className="text-md font-semibold">{s.title}</h1>
            </div>
            <div>
              <Link href={`/snippet/${s.id}`}><Button variant="link">View</Button></Link>
            </div>
          </div>
        )
      }

    </div>
  );
}
