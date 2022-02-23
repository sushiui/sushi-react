import React from "react";
import SsPage from "../sushi-components/SsPage";
import SsHeader from "../sushi-components/SsHeader";
import SsBody from "../sushi-components/SsBody";
import SsCard from "../sushi-components/SsCard";
import SsButton from "../sushi-components/SsButton";
import SsCode from "../sushi-components/SsCode";
import SsIcon from "../sushi-components/SsIcon";

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

const codeLink:string = `
<SsButton link label="link text" />
`;

const codePath:string = `
<SsButton path="/" label="link text" />
<SsButton link path="/" label="link text" />
`;

const codeDisable:string =`
<SsButton label="link text" disable />
<SsButton link label="link text" disable />
`

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
              <SsButton color='red' >Red Button</SsButton>
              <SsButton color='yellow' label="Yellow Button"></SsButton>
              <SsButton color='gray' label="Gray Button"></SsButton>
            </div>
             <SsCode code={codePrimary} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsButton link /&gt;'>
          <SsBody>
            <div className="_flex-row" >
              <SsButton link label="link text" />
            </div>
             <SsCode code={codeLink} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsButton path /&gt;'>
          <SsBody>
            <div className="_flex-row" >
              <SsButton path="/" label="link text" />
              <SsButton link path="/" label="link text" />
            </div>
             <SsCode code={codePath} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsButton disable /&gt;'>
          <SsBody>
            <div className="_flex-row" >
              <SsButton label="link text" disable />
              <SsButton link label="link text" disable />
            </div>
             <SsCode code={codeDisable} language="html" />
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsButton/&gt; link to external in new tab'>
          <SsBody>
            <div className="_flex-row" >
              <SsButton label="google.com" href="http://www.google.com" newTab/>
              &nbsp;
              <SsButton link href="http://www.google.com" newTab>
                google.com
                <SsIcon name='External-link' />
              </SsButton>
            </div>
             <SsCode code={codeDisable} language="html" />
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  );
}

export default ButtonPage;