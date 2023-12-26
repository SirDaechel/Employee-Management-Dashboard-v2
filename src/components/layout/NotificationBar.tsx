import Notification from "../../features/notifications/components/Notification";
import { notificationsState } from "../../features/notifications/data/notificationsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setNotifications } from "../../features/notifications/data/notificationsApiSlice";

type NotificationBarType = {
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotificationBar: React.FC<NotificationBarType> = ({
  setShowNotifications,
  setOverlay,
}) => {
  const theNotifications = useSelector(notificationsState);
  const { notifications } = theNotifications;

  const dispatch = useDispatch();

  const closeNotificationBar = () => {
    setShowNotifications(false);
    setOverlay(false);
  };

  const deleteAllNotifications = () => {
    dispatch(setNotifications([]));
  };

  return (
    <aside className="fixed right-0 top-0 h-screen w-p27 bg-white py-4 px-5 z-100 overflow-y-auto overflow-x-hidden m:w-full xl:w-p50 xxl:w-p50">
      <section className="relative">
        <div className="max-h-p90 overflow-y-auto">
          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="font-poppins text-sm font-normal">Notifications</p>
              <span className="flex items-center justify-between">
                <p
                  className="text-sm text-red-600 cursor-pointer p-4 rounded text-center"
                  style={{
                    display: notifications.length === 0 ? "none" : "block",
                  }}
                  onClick={() => deleteAllNotifications()}
                >
                  Delete all
                </p>
                <button
                  className="bg-transparent py-0.4 px-0.7 rounded text-sm text-red-600"
                  onClick={() => closeNotificationBar()}
                >
                  Close
                </button>
              </span>
            </div>
            {notifications.map((notification) => (
              <Notification key={notification.id} notification={notification} />
            ))}
          </div>
          {notifications.length <= 0 && (
            <p className="text-base absolute top-vh50 left-0 right-0 text-center">
              Nothing to display
            </p>
          )}
        </div>
      </section>
    </aside>
  );
};

export default NotificationBar;
