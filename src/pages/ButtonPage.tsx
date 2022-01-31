import SsPage from "../components/SsPage";
import SsHeader from "../components/SsHeader";
import SsBody from "../components/SsBody";

const ButtonPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Button</span>
      </SsHeader>
      <SsBody>
        Button
      </SsBody>
    </SsPage>
  );
}

export default ButtonPage;