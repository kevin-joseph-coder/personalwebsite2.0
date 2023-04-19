import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Timeline } from './components/Timeline';
import { Resume } from './components/Resume';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Timeline />
      <Resume />
    </div>
  );
}

export default App;
