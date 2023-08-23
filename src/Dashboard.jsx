import * as React from "react";
import grp from "./logo/Group.svg";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "20px", margin: "20px" }}>
      <div
        style={{
          marginBottom: "29px",
          display: "flex",
          justifyContent: "space-Between",
          width: "1188px",
          color: "#2D2F33",
          height: "36px",
        }}
      >
        <div
          style={{
            height: "22px",
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "normal",
            color: "#2D2F33",
            display: "inline-block",
            marginTop: "5px",
          }}
        >
          Projects
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            width: "20%",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            height: "38px",
            width: "958px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              borderRadius: "6px",
              backgroundColor: "#4958A6",
              width: "36px",
              height: "36px",
            }}
          >
            <img
              style={{
                marginTop: "6px",
              }}
              src={grp}
              alt=""
            />
          </div>
          <div
            style={{
              width: "101px",
              height: "27px",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            FinOps
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginBottom: "22px",
            borderBottom: "1px solid rgb(232,232,232)",
            width: "58em",
            color: "#89888F",
            justifyContent: "space-around",
            fontSize: "13px",
            fontWeight: "600",
            height: "16px",
          }}
        >
          <div>Overview</div>
          <div
            style={{
              borderBottom: "2px solid #1657A8",
              color: "#1657A8",
            }}
          >
            Project Tracking
          </div>
          <div> Files & Documents</div>
          <div>Team Allocated</div>
          <div> Risk/Issue Logging</div>
          <div>Jira Details</div>
          <div>One Pager</div>
        </div>
        {/* <div>
            Project Status
        </div> */}

        <div
          style={{
            // margin: "20px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid rgb(232,232,232)",
            backgroundColor: "#F5F7FA",
            width: "927px",
            height: "118px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              // width:"704px",
              height: "118px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                height: "86px",
                backgroundColor: "white",
                width: "205px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                borderRadius: "8px",
                padding: "8px 16px 8px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "173px",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Resources</div>
                <div className="size">20</div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "173px",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Epics</div>
                <div className="size">19</div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "173px",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Tasks</div>
                <div className="size">154</div>
              </div>
            </div>
            

            <div
              style={{
                margin: "10px",
                backgroundColor: "#F5F7FA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                position: "relative",
                bottom: "16px",
              }}
              className="Allocated"
            >
              <div
                style={{
                  position: "relative",
                  width: "86px",
                  bottom: "5px",
                }}
                className="overall-allocation"
              >
                <div className="progress">
                  <progress
                    style={{
                      visibility: "hidden",
                      height: "0",
                      width: "0",
                    }}
                  >
                    68%
                  </progress>
                </div>
              </div>
              <div className="segregated">
                <div style={{ color: "#3B3F6E" }}>Allocated </div>

                <div
                  style={{
                    width: "69px",
                    height: "39px",
                    font: "inter",
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "#5BAF76",
                  }}
                >
                  68%
                </div>
                <div
                  style={{
                    backgroundColor: "#FCF5DF",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  10,026 Hrs
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "#F5F7FA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="segregated"
            >
              <div style={{ backgroundColor: "#F5F7FA" }} className="data">
                <div style={{ color: "#3B3F6E" }}>Planned Hrs</div>

                <div
                  style={{
                    width: "90px",
                    lineHeight: "38.73px",
                    height: "39px",
                    font: "inter",
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "#5BAF76",
                  }}
                >
                  3,006
                </div>

                <div
                  style={{
                    backgroundColor: "#E6F8EB",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  65%
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "#F5F7FA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="logged"
            >
              <div className="segregated">
                <div style={{ color: "#3B3F6E" }}>Logged</div>

                <div
                  style={{
                    width: "90px",
                    height: "39px",
                    font: "inter",
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "#E35B5B",
                  }}
                >
                  3,482
                </div>

                <div
                  style={{
                    backgroundColor: "#FCE6E6",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  69%
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "#F5F7FA",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="variance"
            >
              <div className="segregated">
                <div style={{ color: "#3B3F6E" }}>Variance </div>

                <div
                  style={{
                    width: "90px",
                    lineHeight: "38.73px",
                    height: "39px",
                    font: "inter",
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "#E35B5B",
                  }}
                >
                  -24.7%
                </div>
                <div
                  style={{
                    backgroundColor: "none",
                    width: "25px",
                    height: "17px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
