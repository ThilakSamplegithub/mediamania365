import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import WithSubnavigation from './Components/NavigationBar';
import ChunkofCards from './Components/ChunkofCards';
function App() {
  return (
    <>
    <AllRoutes/>
    <ChunkofCards/>
    {/* <WithSubnavigation/> */}
    </>
  );
}

export default App;
