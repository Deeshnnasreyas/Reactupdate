import '@shopify/polaris/dist/styles.css';
import { AppProvider, Page, Card, Tag } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import Salestable from './Salestable';
import './Sales.css';

function Sales() {
  return (
    <div className="salecontainer">
      <Card className="ResourcesList">
        <AppProvider i18n={enTranslations}>
          <Page title="">
            <ul className="list">
              <li><Tag>This month</Tag></li>
              <li><Tag>This week</Tag></li>
              <li><Tag>Today</Tag></li>
              <li><Tag>Custom</Tag></li>
            </ul>
            <ul className="list">
              <li><input className="textstyle" type="text" placeholder="Search by name,email or product" /><button className="btnstyle">Search</button></li>
              <li ><h2 className="h2style">Rating</h2></li>
              <li>Reviews</li>
            </ul>
            <div className="cardstyle">
              <Tag>Approved Selected</Tag>
              <Tag>Reject Selected</Tag>
              <Tag>More action</Tag>
            </div>
          </Page>
        </AppProvider>
        <Salestable />
      </Card>
    </div>
  );
}

export default Sales;
