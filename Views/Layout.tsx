import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import SideMenu from "../components/SideMenu";

const Layout = () => {
  return (
    <main className="flex gap-4">
      <SideMenu />
      <section className="w-p87 pt-0 pr-4 pb-8 pl-0.5">
        <TopNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
