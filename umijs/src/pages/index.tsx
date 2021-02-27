import styles from './index.less';
import React from 'react';
import {Button} from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>button</Button>
      <Button type="primary">buttonxxx</Button>
    </div>
  );
}
