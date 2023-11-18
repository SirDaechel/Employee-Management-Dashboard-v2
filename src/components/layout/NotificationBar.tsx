import Notification from "../../features/notifications/components/Notification";

const NotificationBar: React.FC = () => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-p27 bg-white py-4 px-5 z-100 overflow-y-auto hidden m:w-full">
      <div className="relative h-full">
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <p className="font-poppins text-sm font-normal">Notifications</p>
            <button className="bg-transparent py-0.4 px-0.7 rounded text-sm text-red-600">
              Close
            </button>
          </div>

          <Notification />
        </div>
        <p className="w-full absolute bottom-1 text-base text-white bg-red-600 hover:bg-red-500 hover:transition cursor-pointer p-4 rounded text-center">
          Delete all
        </p>
      </div>
    </aside>
  );
};

export default NotificationBar;
