import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Sascha Schmidt</h2>
                <h4>saschaschmidt@linkme.de</h4>
            </div>

            <div className="sidebar__stats">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,929</p>
            </div>

            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,494</p>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar