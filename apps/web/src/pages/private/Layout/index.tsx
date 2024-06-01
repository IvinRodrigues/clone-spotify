import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <span>layout</span>
      <Outlet />
    </>
  );
}

export { Layout };
