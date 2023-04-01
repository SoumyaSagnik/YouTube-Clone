import "../css/RecommendedVideos.css";
import VideoCard from "./VideoCard";
import HistoryImage from "../assets/history.jpg";
import NetflixImage from "../assets/netflix.jpg";
import BotezImage from "../assets/BotezLive.jpg";
import SvgImage from "../assets/svg.jpg";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Meet the Most Mysterious Man in History"
          views="2M views"
          timestamp="4 months ago"
          channelImage={HistoryImage}
          channel="Thoughty2"
          verified
          image="https://i.ytimg.com/vi/1wmhQ0XrFKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqQq9DXMin79b4iEluK5Pjm1l9iA"
        />
        <VideoCard
          title="Our Planet | Coastal Seas | FULL EPISODE | Netflix"
          views="22M views"
          timestamp="2 years ago"
          channelImage={NetflixImage}
          channel="Netflix"
          verified
          image="https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHFYI2GE7zfQTPWhh-kEZ1Uicd1A"
        />
        <VideoCard
          title="Everything is crashing - what I am doing"
          views="7.4K views"
          timestamp="22 hours ago"
          channelImage={SvgImage}
          channel="Silicon Valley Girl"
          verified
          image="https://i.ytimg.com/vi/cebt-cPF5iU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeIS7Z2_w4z7knoX6kEIILHYqFJw"
        />
        <VideoCard
          title="My Opponent Fell Asleep During Our Game"
          views="147K views"
          timestamp="17 hours ago"
          channelImage={BotezImage}
          channel="BotezLive"
          verified
          image="https://i.ytimg.com/vi/itZZnBWEsio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQl_lUC4KYHG3TdhdOobkMK3p0eg"
        />
        <VideoCard
          title="Our Planet | From Deserts to Grasslands"
          views="32M views"
          timestamp="2 years ago"
          channelImage={NetflixImage}
          channel="Netflix"
          verified
          image="https://i.ytimg.com/vi/XmtXC_n6X6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqA-zo_7E-ov9VhUtJi-5sBPHrUQ"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
