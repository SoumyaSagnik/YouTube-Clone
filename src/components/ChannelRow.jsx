import { Avatar } from "@mui/material";
import "../css/ChannelRow.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  verified,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && <CheckCircleIcon className="channel__verified" />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
