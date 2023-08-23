import React from "react";
import "./table.css";
import TableFile1 from "./TableFile1";
const TableFile = () => {
  return (
    <div style={{ margin: "20px" }}>
    <TableFile1/>
      <div>
        <div
          style={{
            // margin:"20px",
            marginTop: "40px",

            display: "flex",
            padding: "5px",
            justifyContent: "space-between",
            marginBottom: "22px",
            borderBottom: "1px solid rgb(232,232,232)",
            width: "900px",
          }}
        >
          <div className="btnp">Sprint Tracking</div>{" "}
          <div className="btnp2">Open in Jira</div>
        </div>
      </div>
      {/* //------------------------------------------------------------------------- */}

     

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "900px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "13px", fontWeight: "700" }}>
            Sprint 12: &nbsp;
          </div>
          <div style={{ fontSize: "13px", fontWeight: "600" }}>
            FinOps 7Aug - 18Aug
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "5px",
              marginTop: "3px",
              fontSize: "11px",
              fontWeight: "500",
              color: "#1657A8",
            }}
          >
            (Current)
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "500",
                color: "#89888F",
              }}
            >
              Planned
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>860</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "500",
                color: "#89888F",
              }}
            >
              Logged
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>760</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "500",
                color: "#89888F",
              }}
            >
              Capacity
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>1000</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              color: "#89888F",
            }}
          >
            Variance
          </div>
          <button
            style={{
              border: "none",
              borderRadius: "4px",
              color: "white",
              width: "46px",
              height: "26px",
              backgroundColor: "#5BAF76",
              alignContent: "center",
            }}
          >
            15%
          </button>
        </div>
      </div>


      <div class="progress-bar">
        <div class="progress-bar-fill-1"></div>
        <div class="progress-bar-fill-2"></div>
        <div class="progress-bar-fill-3"></div>
      </div>

      
      <div
        style={{
          width: "927px",
          height: "fit-content",
        }}
      >
        <table
          className="roundedCorners"
          style={{
            width: "900px",
            textAlign: "start",
          }}
        >
          <tr style={{ backgroundColor: "#F9F9F9", textAlign: "left" }}>
            <th>User</th>
            <th style={{ textAlign: "center" }}>Planned Hrs</th>
            <th style={{ textAlign: "center" }}>Logged Hrs</th>
            <th
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Variance
            </th>
          </tr>

          <tr>
            <td>Colleen Koepp</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
              
            </td>
          </tr>

          <tr>
            <td>Marcella Murphy</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Jacquelyn Gulgowski</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Bessie Ebert</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Sheldon Greenfelder</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Taylor Hoeger</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Taylor Hoeger</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Gerardo Ondricka</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ textAlign: "center" }}>80</td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              <div class="progress-f">
                <div class="progress-bar-fill-1-f"></div>
                <div class="progress-bar-fill-2-f"></div>
                <div class="progress-bar-fill-3-f"></div>
              </div>
              <div>
                <button
                  style={{
                    width: "68px",
                    backgroundColor: "#56BE3B1F",
                    border: "none",
                    borderRadius: "4px",
                    margin: "7px",
                  }}
                >
                  15%
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TableFile;
