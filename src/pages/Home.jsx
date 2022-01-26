import SsPage from "../components/ss-page";
import SsCard from "../components/ss-card";
import SsHeader from "../components/ss-header";
import SsBody from "../components/ss-body";

const Home = () => {
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

export default Home;
