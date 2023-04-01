import { Avatar } from "@mui/material";
import "../css/VideoCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  verified,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p id="channelName">
            {channel}{" "}
            {verified && (
              <CheckCircleIcon className="videoCard__channelVerified" />
            )}
          </p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
