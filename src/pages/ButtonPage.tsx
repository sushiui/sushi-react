import SsPage from "../components/SsPage";
import SsHeader from "../components/SsHeader";
import SsBody from "../components/SsBody";
import SsCard from "../components/SsCard";
import SsButton from "../components/SsButton";

const ButtonPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Button</span>
      </SsHeader>
      <SsBody>
        <SsCard title='&lt;Button&gt;'>
          <SsBody>
             <SsButton label="Primary Button"></SsButton>
             <SsButton>Another Label</SsButton>
             <SsButton leftIcon='Search' rightIcon='Search'>Another Label</SsButton>
          </SsBody>
        </SsCard>
        <SsCard title='&lt;Button&gt;'>
          <SsBody>
             <SsButton primary label="Primary Button"></SsButton>
             <SsButton primary >Another Label</SsButton>
             <SsButton primary leftIcon='Search' rightIcon='Search'>Another Label</SsButton>
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  );
}

export default ButtonPage;