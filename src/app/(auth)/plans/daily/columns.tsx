import { DailyPlan } from "@/interfaces/dailyPlan";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

interface Props {
  handleEdit: (data: any) => void;
  handleGet: (data: any) => void;
}

export function dailyColumns({
  handleEdit,
  handleGet,
}: Props): ColumnDef<DailyPlan>[] {
  return [
    {
      accessorKey: "id",
    },
    {
      accessorKey: "content",
      header: "Conteudo",
    },
    {
      accessorKey: "discipline",
      header: "Disciplina",
    },
    {
      accessorKey: "date",
      header: "Data de Aplicacao",
      cell: ({ row }) => {
        const value = row.getValue("date") as Date;

        return <span>{format(value, "dd/MM/yyyy")}</span>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const value = row.getValue("status");

        return <span className="text-zinc-90">{String(value)}</span>;
      },
    },
    {
      accessorKey: "isReviewed",
      header: "Revisado",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.getValue("id");

        return (
          <div className="flex items-center gap-3">
            <button onClick={() => handleGet(id)}>
              <AiOutlineEye size={18} />
            </button>
            <button onClick={() => handleEdit(id)}>
              <AiOutlineEdit size={18} />
            </button>
          </div>
        );
      },
    },
  ];
}
