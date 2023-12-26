import { Outlet } from "react-router-dom";
import TopNav from "../components/layout/TopNav";
import SideMenu from "../components/layout/SideMenu";
import NotificationBar from "../components/layout/NotificationBar";
import { useState } from "react";

const Layout: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      {overlay && (
        <section className="bg-black z-10 w-full fixed top-0 bottom-0 opacity-70"></section>
      )}
      <main className="flex items-start justify-between gap-2 w-full m:flex-col">
        <SideMenu />
        {showNotifications && (
          <NotificationBar
            setShowNotifications={setShowNotifications}
            setOverlay={setOverlay}
          />
        )}
        <section className="w-p87 pr-4 pl-3 pb-8 m:w-full m:p-0.6 m:mb-24 xl:w-p77 xl:pl-4 xxl:w-p77 ultra:px-96">
          <TopNav
            setShowNotifications={setShowNotifications}
            setOverlay={setOverlay}
          />
          <section className="mt-8">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default Layout;
