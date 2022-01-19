import "./App.css";
import SSMenu from "./components/ss-menu";
import SSPage from "./components/ss-page";

function App() {
  return (
    <div className='ss-site'>
      <div className='header _flex-grow-1'>
        <span className='sitename'>
          <span className='ss-icon-Sushi'></span>
          Sushi Design System
        </span>
        <div className='_flex-grow-1'></div>
        <span className='account'>
          <button className='ss-button -secondary'>
            <span className='ss-icon-Picture'></span>
            Background
          </button>
        </span>
      </div>
      <div className='body'>
        <SSMenu />
        <SSPage />
      </div>
    </div>
  );
}

export default App;
