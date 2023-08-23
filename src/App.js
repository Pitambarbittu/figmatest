import "./App.css";
import Dashboard from "./Dashboard";
import TableFile from "./TableFile";
import SideNav from "./nav/SideNav";
// import TopNav from './nav/TopNav';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <SideNav />
        </div>
        <div style={{ marginLeft: "10em" }} className="inner_container">
          <Dashboard />
          <TableFile />
        </div>
      </div>
    </div>
  );
}

export default App;
