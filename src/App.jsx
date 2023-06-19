import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Sidebar from './components/Side Bar/SideBar';
import Header from './components/header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className='app'>
      {/* <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div> */}
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
