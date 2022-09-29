import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MainNavigation from './main-navigation';

function App() {
  return (
    <>
      <ToastContainer />
      <MainNavigation />
    </>
  );
}

export default App;
