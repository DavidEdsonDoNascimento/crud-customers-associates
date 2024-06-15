import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Trash } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CustomerTableRow } from "./customer-table-row";
import { CustomerTableFilters } from "./customer-table-filters";
import { Pagination } from "@/components/pagination";

export const Customers = () => {
  return (
    <>
      <Helmet title="Clientes" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
        <div className="space-y-2.5">
          <CustomerTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-[200px]">Registrado em</TableHead>
                  <TableHead className="w-[84px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <CustomerTableRow key={i} />
                  )
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
}