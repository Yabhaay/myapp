import logo from './logo.svg';
import "./App.css";
import Sidebar from './components/sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import MainContent from './components/mainContent';

function App() {
  return (
    <div className='body'>
    <div className='sidebar'>
      <Sidebar />
      </div>
      <Header />
      <div className='tiles'>
      <MainContent/>
      </div>
    </div>
  );
}

export default App;
