import SsPage from "../sushi-components/SsPage";
import SsHeader from "../sushi-components/SsHeader";
import SsBody from "../sushi-components/SsBody";
import SsCard from "../sushi-components/SsCard";
import SsIcon from "../sushi-components/SsIcon";
import SsCode from "../sushi-components/SsCode";

const iconNames = [
'Access-alarm',
'Account-circle',
'Add',
'Alert',
'Approve',
'Approves-filled',
'Approves',
'Assign',
'Attach-Money',
'Attachment',
'Auditor',
'Back-Android',
'Back-iOS',
'Back',
'Bookmark',
'Bookmarks-filled',
'Business',
'Calendar',
'Callcenter',
'Category',
'Check-list',
'Checkbox-selected',
'Checkbox',
'Checked',
'Circle-filled',
'Classroom',
'Close-or-Reject',
'Company',
'Content-copy',
'DOC',
'Dash',
'Date',
'Decrease',
'Delete',
'Document-1',
'Document',
'Documents',
'Down',
'Download',
'ESG',
'Edit-filled',
'Edit',
'Email',
'Euro',
'Exit',
'External-link',
'Eye-close',
'Eye',
'Fax',
'File-upload',
'Fill-color',
'Filter',
'Fire',
'Folder-open',
'Github',
'Help',
'Home-filled',
'Home',
'Increase',
'Information',
'Language',
'Link',
'Location',
'Lock',
'Logout',
'Main-Component-filled',
'Market',
'Maximize-arrow',
'Maximize-filled',
'Minimize-arrow',
'Minimize-filled',
'Mobile-phone',
'More-Android',
'More-iOS',
'More-Hamburger',
'Mouse-cursor-filled',
'Move',
'News-filled',
'News',
'Next-big',
'Next',
'Notification-filled',
'Notification',
'One-Report',
'Pdf',
'Page-filled',
'Phone-call-filled',
'Phone',
'Picture',
'Printer',
'Profile-filled',
'Profile',
'Push-pin',
'Radio-button-selected',
'Radio-button',
'Reader',
'Refresh',
'Search',
'Set-link',
'Set',
'Setting',
'Settings-suggest',
'Sorting',
'Star-Filled',
'Star',
'Status-circle',
'Suitcase',
'Supervisor',
'Sushi',
'TXT',
'Table-view',
'Table',
'Terrain',
'Thumb-up-filled',
'Thumbnail',
'Time',
'Unchange',
'Underline',
'Up',
'Video',
'Vpn-key',
'Waiting',
'Warning',
'Web',
'XML',
'Zoom-in',
'Zoom-out',
'cancel-filled'
]

const allIcons = iconNames.map((iconName) => {
  return (
    <div key={iconName} className="each-icon">
      <SsIcon className="_font-size-header" name={iconName} />
      <br />
      {iconName}
    </div>
  );
});

const codeIcon:string = `<SsIcon name="Search" />`

const IconPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Icon</span>
      </SsHeader>
      <SsBody>
        <SsCard title='&lt;SsIcon/&gt;'>
          <SsBody>
            <SsCode code={codeIcon} language="html" />
            <div className="show-icons">
              {allIcons}
            </div>
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  )
}

export default IconPage;