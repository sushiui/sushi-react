import SsPage from "../sushi-components/SsPage";
import SsHeader from "../sushi-components/SsHeader";
import SsBody from "../sushi-components/SsBody";
import SsCard from "../sushi-components/SsCard";
import SsCode from "../sushi-components/SsCode";
import SsLink from "../sushi-components/SsLink";
import SsIcon from "../sushi-components/SsIcon";

const codeOnClick:string = `
<SsLink label="Primary Button"></SsLink>
<SsLink>Another Label</SsLink>
<SsLink leftIcon='Search' rightIcon='Search' newTab >Another Label</SsLink>
`;

const codePath:string = `
<SsLink label="Primary Button" path="/button"></SsLink>
<SsLink path="/button">Another Label</SsLink>
<SsLink leftIcon='Search' rightIcon='Search' path="/button" newTab>Another Label</SsLink>
`;

const codeHref:string = `
<SsLink label="Primary Button" href="https://www.google.com"></SsLink>
<SsLink href="https://www.google.com">Another Label</SsLink>
<SsLink leftIcon='Search' rightIcon='Search' href="https://www.google.com" newTab>Another Label</SsLink>
`;

const LinkPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Button</span>
      </SsHeader>
      <SsBody>
        <SsCard title='&lt;SsLink /&gt;'>
          <SsBody>
             <div className="_flex-row">
                <SsLink label="Primary Button"></SsLink>
                <SsLink>Another Label</SsLink>
                <SsLink leftIcon='Search' rightIcon='Search' newTab >Another Label</SsLink>
             </div>
             <SsCode code={codeOnClick} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsLink path="/button" /&gt;'>
          <SsBody>
             <div className="_flex-row">
                <SsLink label="Primary Button" path="/button"></SsLink>
                <SsLink path="/button">Another Label</SsLink>
                <SsLink leftIcon='Search' rightIcon='Search' path="/button" newTab>Another Label</SsLink>
             </div>
             <SsCode code={codePath} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsLink href="https://www.google.com" /&gt;'>
          <SsBody>
             <div className="_flex-row">
                <SsLink label="Primary Button" href="https://www.google.com"></SsLink>
                <SsLink href="https://www.google.com">Another Label</SsLink>
                <SsLink leftIcon='Search' rightIcon='Search' href="https://www.google.com" newTab>Another Label</SsLink>
             </div>
             <SsCode code={codeHref} language="html" />
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  );
}

export default LinkPage;