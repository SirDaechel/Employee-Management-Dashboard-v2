import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import SideMenu from "../components/SideMenu";
import NotificationBar from "../components/NotificationBar";

const Layout: React.FC = () => {
  return (
    <main className="flex gap-4 m:flex-col">
      <SideMenu />
      <NotificationBar />
      <section className="w-p87 pt-0 pr-4 pb-8 pl-0.5 m:w-full m:p-0.6 m:mb-24">
        <TopNav />
        <section className="mt-8">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default Layout;
