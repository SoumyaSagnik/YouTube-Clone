import { Avatar } from "@mui/material";
import "../css/VideoRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoRow = ({
  views,
  description,
  timestamp,
  verified,
  channel,
  title,
  image,
  channelImage,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p>
          {views} • {timestamp}
        </p>
        <div className="videoRow__channel">
          <Avatar className="videoRow__logo" alt={channel} src={channelImage} />
          <p>
            {channel}{" "}
            {verified && (
              <CheckCircleIcon className="videoRow__channelVerified" />
            )}
          </p>
        </div>
        <p>{description}</p>
      </div>
      <div className="videoRow__text__mobile">
        <Avatar className="videoRow__logo" alt={channel} src={channelImage} />
        <div className="text__mobile__container">
          <h6>{title}</h6>
          <p>
            {channel} • {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
