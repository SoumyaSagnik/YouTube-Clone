import "../css/SidebarMini.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

const SidebarMini = () => {
  return (
    <div className="sidebarMini">
      <div className="sidebarMini__row">
        <HomeIcon className="sidebarMini__icon" />
        <p>Home</p>
      </div>
      <div className="sidebarMini__row">
        <WhatshotIcon className="sidebarMini__icon" />
        <p>Trending</p>
      </div>
      <div className="sidebarMini__row">
        <SubscriptionsOutlinedIcon className="sidebarMini__icon" />
        <p>Subscriptions</p>
      </div>
      <div className="sidebarMini__row">
        <VideoLibraryOutlinedIcon className="sidebarMini__icon" />
        <p>Library</p>
      </div>
    </div>
  );
};

export default SidebarMini;
