import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
        <header></header>
        <section>
            <Outlet />
        </section>
        <footer></footer>
    </>
  )
}
