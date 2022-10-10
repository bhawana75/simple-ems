import React from "react";
import '../css/component/topbar.css'
import {  Settings } from "@material-ui/icons";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Employees</span>
        </div>
          <Link to="/login" className="link">
            <div className="topbarIconContainer">
            <Settings />
          </div>
            </Link>
      </div>
    </div>
  );
}
export default Topbar;