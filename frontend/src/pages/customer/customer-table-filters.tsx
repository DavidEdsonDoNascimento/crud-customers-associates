import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus, Search, X } from "lucide-react";
import { CustomerRegister } from "./customer-register";

export const CustomerTableFilters = () => {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do Cliente" className="h-8 w-auto" />
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4 mr-2" />
        Remover filtros
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" variant="outline" size="xs">
            <Plus className="h-4 w-4 mr-2" />
            Cadastrar
          </Button>
        </DialogTrigger>
        <CustomerRegister />
      </Dialog>
    </form>
  );
}