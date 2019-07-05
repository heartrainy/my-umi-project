
import React from 'react';
import { Card} from 'antd';
import styles from './style.less';

const tabList: object[] = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];


class Address extends React.Component {

  render() {
    return (
      <div>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: '100%' }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default Address;