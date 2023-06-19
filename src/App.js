import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from './components/Side Bar/SideBar';
import MyProSidebar from './components/Left Bar/LeftBar';
import { MyProSidebarProvider } from './components/Left Bar/sidebarContext';
import './App.css';

function App() {
  return (
    <div>
      {/* <MyProSidebarProvider> */}

      <Sidebar />
      {/* <MyProSidebar /> */}
      {/* </MyProSidebarProvider> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
