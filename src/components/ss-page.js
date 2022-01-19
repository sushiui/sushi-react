import react from "react";
import SSCard from "./ss-card";

const SSPage = () => {
  return (
    <div className='ss-page'>
      <div className='header -nobreadcrumbs'>
        <span className='label'>Welcome</span>
      </div>
      <div className='body'>
        <SSCard />
        <div className='ss-card'>
          <div className='header'>
            <span className='label'>Example</span>
          </div>
          <div className='body _padding'>Example</div>
        </div>
        <div className='ss-card'>
          <div className='header'>
            <span className='label'>Structure</span>
          </div>
          <div className='body _padding'>
            โครงสร้างของ App ประกอบด้วย 3 ชั้นคือ Site, Page และ Card
            โดยในแต่ละชั้นจะมี Header และ Body เป็นของตัวเอง
            <img
              alt='structure description'
              src='https://sushiui.github.io/sushi/assets/images/structure.png'
              width='100%'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSPage;
