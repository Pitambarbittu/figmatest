import React from "react";
import "../App.css";
import img from "../logo/machine-learning 1.svg";
import img2 from "../logo/cogwheel 2.svg";
import img3 from "../logo/lifering 1.svg";
import img4 from "../logo/opening-times 1.svg";
import img5 from "../logo/paper 1.svg";
import img6 from "../logo/stopwatch 1.svg";
import img7 from "../logo/users-mm 1.svg";

const SideNav = () => {
  return (
    <div
      style={{
        color: "#E1E7F0",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        fontWeight: "500",
        letterSpacing: "0.4px",
        textTransform: "capitalize",
      }}
      className="sidenav"
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img} alt="" />
          </div>
          <div>Dashboard</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>Projects</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img} alt="" />
          </div>
          <div>Skills</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img7} alt="" />
          </div>
          <div>Users</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>Reports</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>Time Tracker</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "10px",
          marginBottom: "55px",
          flexDirection: "column",
          gap: "8px",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>Help</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>Setting</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
