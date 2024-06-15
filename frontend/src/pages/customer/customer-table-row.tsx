import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search, Trash } from "lucide-react";
import { CustomerDetails } from "./customer-details";

export const CustomerTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do cliente</span>
            </Button>
          </DialogTrigger>
          <CustomerDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">fagadasfada097808d</TableCell>
      <TableCell className="font-medium">David Edson</TableCell>
      <TableCell className="text-muted-foreground">15/06/2024 09:28:32</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <Trash className="h-3 w-3" />
          <span className="sr-only">Excluir</span>
        </Button>
      </TableCell>
    </TableRow>
  );
}