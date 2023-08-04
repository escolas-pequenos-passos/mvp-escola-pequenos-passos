import { AiFillSignal, AiOutlineUser } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { BiExport } from "react-icons/bi";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="p-10 pt-6 overflow-y-auto overflow-x-hidden">
      {/* Title */}
      <h1 className="text-zinc-900 font-bold text-xl">Dashboard</h1>

      {/* Stats */}
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-3">
                <span className="text-zinc-800 text-lg">Estatisticas</span>
                <AiFillSignal />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-light-green h-10 w-10">
                  <AiOutlineUser />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-zinc-900">20</p>
                  <p className="font-medium text-xs text-zinc-700">
                    Total de Professores
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-light-blue h-10 w-10">
                  <AiOutlineUser />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-zinc-900">6</p>
                  <p className="font-medium text-xs text-zinc-700">
                    Total de Coordenadores
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-dark-blue h-10 w-10">
                  <AiOutlineUser className="text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-zinc-900">680</p>
                  <p className="font-medium text-xs text-zinc-700">
                    Total de Correcoes
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <div className="mt-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-zinc-800 text-lg">Professores</span>
                <IoSchoolSharp />
              </div>
              <Button className="bg-green-500">
                <span className="text-xs font-bold">Exportar</span>{" "}
                <BiExport className="ml-2" size={16} />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Listagem dos professores</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Ultimo Login</TableHead>
                  <TableHead>Ultimo Plano Inserido</TableHead>
                  <TableHead>N. Planos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Nome 1</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 2</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 3</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 4</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 5</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 6</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome 7</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>02/05/2023</TableCell>
                  <TableCell>6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
