import SsPage from "../components/SsPage";
import SsHeader from "../components/SsHeader";
import SsBody from "../components/SsBody";
import SsCard from "../components/SsCard";
import SsButton from "../components/SsButton";
import SsCode from "../components/SsCode";

const codeSecondary:string = `
<SsButton label="Primary Button"></SsButton>
<SsButton>Another Label</SsButton>
<SsButton leftIcon='Search' rightIcon='Search'>Another Label</SsButton>

`;

const codePrimary:string = `
<SsButton primary label="Primary Button"></SsButton>
<SsButton red label="Red Button"></SsButton>
<SsButton yellow label="Yellow Button"></SsButton>
<SsButton gray label="Gray Button"></SsButton>

`;


const ButtonPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Button</span>
      </SsHeader>
      <SsBody>
        <SsCard title='&lt;SsButton /&gt;'>
          <SsBody>
             <div className="_flex-row">
                <SsButton label="Primary Button"></SsButton>
                <SsButton>Another Label</SsButton>
                <SsButton leftIcon='Search' rightIcon='Search'>Another Label</SsButton>
             </div>
             <SsCode code={codeSecondary} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsButton color /&gt;'>
          <SsBody>
            <div className="_flex-row" >
              <SsButton primary label="Primary Button"></SsButton>
              <SsButton red >Red Button</SsButton>
              <SsButton yellow label="Yellow Button"></SsButton>
              <SsButton gray label="Gray Button"></SsButton>
            </div>
             <SsCode code={codePrimary} language="html" />
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  );
}

export default ButtonPage;