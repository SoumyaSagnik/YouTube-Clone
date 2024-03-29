import "../css/SidebarRow.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className={`sidebarRow__icon ${selected && "selected"}`} />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
