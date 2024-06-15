import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

export const CustomerDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cliente: 4jn53k4jn5k2</DialogTitle>
        <DialogDescription>Detalhes do cliente</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Nome:</span>
          <Input value="David" className="h-8 w-auto" />
          <Button type="submit" variant="secondary" size="xs">
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </Button>
        </form>
      </div>
    </DialogContent>
  );
}