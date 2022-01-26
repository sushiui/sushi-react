import SsPage from "../components/SsPage";
import SsCard from "../components/SsCard";
import SsHeader from "../components/SsHeader";
import SsBody from "../components/SsBody";

const HomePage = () => {
  return (
    <SsPage>
      {/* TODO Move -nobreadcrumbs to props */}
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Welcome</span>
      </SsHeader>
      <SsBody>
        <SsCard title='Structure'>
          <SsBody>I am a body</SsBody>
        </SsCard>
        <SsCard>
          <SsHeader>
            <span className='label'>Structure</span>
          </SsHeader>
          <SsBody className='_padding'>
            โครงสร้างของ App ประกอบด้วย 3 ชั้นคือ Site, Page และ Card
            โดยในแต่ละชั้นจะมี Header และ Body เป็นของตัวเอง
            <img
              alt='structure description'
              src='https://sushiui.github.io/sushi/assets/images/structure.png'
              width='100%'
            />
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  );
};

export default HomePage;
