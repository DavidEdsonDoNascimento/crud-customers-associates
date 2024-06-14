import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div>
      <h1>cabecalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}