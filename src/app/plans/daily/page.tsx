"use client";

import { usePathname, useRouter } from "next/navigation";

import { FaRegStickyNote } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { plansDaily } from "./plansDaily";
import { dailyColumns } from "./columns";

export default function Daily() {
  const router = useRouter();
  const pathname = usePathname();

  function handleEdit(data: any) {
    router.push(`${pathname}/edit`);
  }

  function handleGet(data: any) {
    console.log(data);
  }

  return (
    <main className="p-10 pt-6 overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-zinc-900 font-bold text-xl">
          Planos De Aula Diarios
        </h1>

        <Button onClick={() => router.push(`${pathname}/new`)}>
          <span className="text-xs font-semibold">Novo Plano</span>
          <FaRegStickyNote className="ml-3 text-white" size={16} />
        </Button>
      </div>

      <div className="mt-5">
        <DataTable
          columns={dailyColumns({
            handleEdit,
            handleGet,
          })}
          data={plansDaily}
        />
      </div>
    </main>
  );
}
