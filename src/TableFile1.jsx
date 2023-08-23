import React from "react";
import "./table.css";
const TableFile1 = () => {
  return (
    <div style={{ margin: "20px" }}>
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
          <div className="btnp">Epic Tracking</div>{" "}
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
            EPIC Status
          </div>
          
          
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex",gap:"3px",
                alignItems:"center" }}>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "500",
                color: "#89888F",
              }}
            >
              Completed
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>240</div>
          </div>
          <div style={{ display: "flex",gap:"3px",
                alignItems:"center" }}>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: "500",
                color: "#89888F",
              }}
            >
              In Progress
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600",gap:"3px",
                alignItems:"center" }}>76</div>
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
              To Do
            </div>
            <div style={{ fontSize: "13px", fontWeight: "600" }}>150</div>
          </div>
          
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
          // className="roundedCorners"
          style={{
            width: "900px",
            textAlign: "start",
            border:"none"
          }}
        >
          <tr style={{ backgroundColor: "#F9F9F9", textAlign: "left" }}>
            <div style={{fontSize:"12px",fontWeight:500, color:"#89888F"}}>Individual EPIC Status</div>
            
          </tr>

          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>

          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>
          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>


          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>


           <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>


          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>


           <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>


          <tr >
            <div style={{display: "flex",gap:"8px", alignItems:"center", justifyContent:"space-between", width:"895px"}}>
            <div style={{display:"flex", gap:"8px"}}>
            <div><td style={{
              display: "flex", justifyContent: "flex-start",
              fontSize:"12px",
              fontWeight:"700",
              color:"#1657A8"
              }}>FOP-156 </td></div>
            <div><td style={{display: "flex", justifyContent: "flex-start",fontSize:"12px",fontWeight:"500"}}>FinOps Observability Readiness</td></div>
            </div>
           <div style={{
            display:"flex",alignItems:"center", gap:"4px",
           }}>
           <div className="colorful-bullet green ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",marginRight:"12px",}}>240</div>
            <div className="colorful-bullet yellow ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500",  marginRight:"12px"}}>76</div> <div className="colorful-bullet grey ">
            </div>
            <div style={{fontSize:"12px", fontWeight:"500"}}>150</div>
           </div>

            </div>
            <td style={{ display: "flex", justifyContent: "flex-start", }}>
            <div class="progress-second-table">
                <div class="progress-second-bar-fill-1-f"></div>
                <div class="progress-second-bar-fill-2-f"></div>
                <div class="progress-second-bar-fill-3-f"></div>
              </div>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TableFile1;
