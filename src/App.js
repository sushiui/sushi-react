import "./App.css";
import SsMenu from "./components/ss-menu";
import SsPage from "./components/ss-page";
import SsSite from "./components/ss-site";
import SsIcon from "./components/ss-icon";
import SsCard from "./components/ss-card";

function App() {
  return (
    <SsSite>
      <SsSite.Header className=' _flex-grow-1'>
        <span className='sitename'>
          <SsIcon name='Sushi' />
          Sushi Design System
        </span>
        <div className='_flex-grow-1'></div>
        <span className='account'>
          <button className='ss-button -secondary'>
            <span className='ss-icon-Picture'></span>
            Background
          </button>
        </span>
      </SsSite.Header>
      <SsSite.Body>
        <SsMenu />
        <SsPage>
          <SsPage.Header className='-nobreadcrumbs'>
            <span className='label'>Welcome</span>
          </SsPage.Header>
          <SsPage.Body>
            <SsCard>
              <SsCard.Header>Structure</SsCard.Header>
              <SsCard.Body>I am a body</SsCard.Body>
            </SsCard>
            <SsCard>
              <SsCard.Header>
                <span className='label'>Structure</span>
              </SsCard.Header>
              <SsCard.Body className='_padding'>
                โครงสร้างของ App ประกอบด้วย 3 ชั้นคือ Site, Page และ Card
                โดยในแต่ละชั้นจะมี Header และ Body เป็นของตัวเอง
                <img
                  alt='structure description'
                  src='https://sushiui.github.io/sushi/assets/images/structure.png'
                  width='100%'
                />
              </SsCard.Body>
            </SsCard>
          </SsPage.Body>
        </SsPage>
      </SsSite.Body>
    </SsSite>
  );
}

export default App;
