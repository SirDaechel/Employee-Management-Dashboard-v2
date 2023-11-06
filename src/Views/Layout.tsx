import { Outlet } from "react-router-dom";
import TopNav from "../Components/TopNav";
import SideMenu from "../Components/SideMenu";
import NotificationBar from "../Components/NotificationBar";

const Layout = () => {
  return (
    <main className="flex gap-4">
      <SideMenu />
      <NotificationBar />
      <section className="w-p87 pt-0 pr-4 pb-8 pl-0.5">
        <TopNav />
        <section className="mt-8">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Layout;
