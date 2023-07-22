import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.svg" alt="" />

                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" title="me" />
            </div>
        </div>
    )
}

export default Header
