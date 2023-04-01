import "../css/SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import CarryImage from "../assets/channel.jpg";
import SonnyImage from "../assets/sonny.jpg";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage__container">
      <div className="searchPage">
        <div className="searchPage__filter">
          <div className="searchPage__filter__container">
            <TuneIcon />
            <h5>Filters</h5>
          </div>
        </div>
        <hr />
        <ChannelRow
          image={CarryImage}
          ChannelImage={CarryImage}
          channel="CarryMinati"
          verified
          subs="39M"
          noOfVideos={69}
          description="This is just some dummy data. Created for learning purpose only. Don't sue me please!"
        />
        <hr />
        <VideoRow
          views="332M"
          channelImage={CarryImage}
          description="YALGAAR HO"
          timestamp="2 years ago"
          verified
          channel="CarryMinati"
          title="YALGAAR"
          image="https://i.ytimg.com/vi/zzwRbKI2pn4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJ4D0vJXQ-R_Wzx6xEhDb8wy9CiQ"
        />
        <VideoRow
          views="69M"
          channelImage={CarryImage}
          description="Best Motivational Song"
          timestamp="2 years ago"
          verified
          channel="CarryMinati"
          title="VARDAAN"
          image="https://i.ytimg.com/vi/7mFvyrNHZRY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKpAbnhaqTTLZekJUqYMzzDSWwAQ"
        />
        <VideoRow
          views="25K"
          channelImage={SonnyImage}
          description="#Papa React"
          timestamp="1 year ago"
          verified
          channel="Sonny Sangha"
          title="Moving to Dubai"
          image="https://i.ytimg.com/vi/hP1V5wehdEU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVNK7gthVe1TH9rPVMD5m5fbkg2A"
        />
      </div>
    </div>
  );
};

export default SearchPage;
