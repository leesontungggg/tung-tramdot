import Image from "next/image";
import { handleGetItems } from "@/services/item";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Projects() {
  const items: any = await handleGetItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items.data.data && (
        <div className="grid grid-cols-3 gap-4">
          {items.data.data.map((item: any) => (
            <Link
              href={`/items/${item.id}`}
              className="flex flex-col p-4 items-center gap-4 cursor-pointer"
            >
              <h6 className="text-2xl font-bold">{item.name}</h6>
              <img
                src={`https://tramdot.up.railway.app/assets/${item.thumbnail}.jpg`}
              />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
