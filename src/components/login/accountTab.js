import LoginTab from "./loginTab";
import RegisterTab from "./registerTab";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AccountTab = () => {
  return (
    <Tabs>
        <TabList>
            <Tab>SE CONNECTER</Tab>
            <Tab>CREER UN COMPTE</Tab>
        </TabList>

        <TabPanel>
            <LoginTab />
        </TabPanel>
        <TabPanel>
            <RegisterTab />
        </TabPanel>
    </Tabs>
  );
};
export default AccountTab;