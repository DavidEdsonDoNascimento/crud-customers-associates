import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}