import { Outlet } from "react-router-dom";
import TopNav from "../Components/TopNav";
import SideMenu from "../Components/SideMenu";

const Layout = () => {
  return (
    <main className="flex gap-4">
      <SideMenu />
      <section className="w-p87 pt-0 pr-1.5 pb-8.5 pl-0.125">
        <TopNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
