import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";
import { Helmet } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-base">Clientes x Contatos</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
              <span className="text-2xl font-bold tracking-tight">
                Cada cliente tem em média 5 contatos (associados)
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}