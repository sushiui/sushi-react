import SsPage from "../components/ss-page";
import SsCard from "../components/ss-card";

const Home = () => {
  return (
    <SsPage>
      {/* TODO Move -nobreadcrumbs to props */}
      <SsPage.Header className='-nobreadcrumbs'>
        <span className='label'>Welcome</span>
      </SsPage.Header>
      <SsPage.Body>
        <SsCard title='Structure'>
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
  );
};

export default Home;
