import "../css/Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SensorsIcon from "@mui/icons-material/Sensors";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
      <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
      <SidebarRow Icon={SmartDisplayOutlinedIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
      <h4>Explore</h4>
      <SidebarRow Icon={LocalMallOutlinedIcon} title="Shopping" />
      <SidebarRow Icon={MusicNoteOutlinedIcon} title="Music" />
      <SidebarRow Icon={MovieCreationOutlinedIcon} title="Movies" />
      <SidebarRow Icon={SensorsIcon} title="Live" />
      <SidebarRow Icon={StickyNote2OutlinedIcon} title="News" />
      <SidebarRow Icon={EmojiEventsOutlinedIcon} title="Sports" />
      <SidebarRow Icon={LightbulbOutlinedIcon} title="Learning" />
      <hr />
      <SidebarRow Icon={SettingsOutlinedIcon} title="Settings" />
      <SidebarRow Icon={OutlinedFlagIcon} title="Report history" />
      <SidebarRow Icon={HelpOutlineOutlinedIcon} title="Help" />
      <SidebarRow Icon={SmsFailedOutlinedIcon} title="Send feedback" />
      <hr />
    </div>
  );
};

export default Sidebar;
