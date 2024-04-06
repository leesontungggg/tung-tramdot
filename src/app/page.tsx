import Image from "next/image";
import { handleGetProjects } from "@/services/project";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const projects: any = await handleGetProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects.data.data && (
        <div className="grid grid-cols-3 gap-4">
          {projects.data.data.map((project: any) => (
            <Link
              href={`/projects/${project.id}`}
              className="flex flex-col p-4 items-center gap-4 cursor-pointer"
            >
              <h6 className="text-2xl font-bold">{project.name}</h6>
              <img
                src={`https://tramdot.up.railway.app/assets/${project.thumbnail}.jpg`}
              />
            </Link>
            //
          ))}
        </div>
      )}
    </main>
  );
}
