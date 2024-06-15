import { Outlet } from "react-router-dom"
import { Coffee } from "lucide-react"

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Coffee className="h-5 w-5" />
          <span className="font-semibold">Desafio</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; Desafio - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}