import '../css/component/sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  Report,
} from "@material-ui/icons";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">

          <Link to="/login" className="link">
            <li className="sidebarListItem">
              <LoginIcon className="sidebarIcon" />
              Login
            </li>
            </Link>
            
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
           
            <Link to="/chart" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            <Link to="/sales" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employees
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Software Product
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/users" className="link">
              <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
                New/Add
              </li>
            </Link>
            <Link to="/chart" className="link">
              <li className="sidebarListItem">
              <Report className="sidebarIcon" />
               Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;