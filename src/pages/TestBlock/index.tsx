import React, { Component } from 'react';
import { Table } from 'antd';
import { ColumnProps, TableRowSelection, TableProps } from 'antd/es/table';
import styles from './index.css';

export interface IProps {

}

export interface IStates {

}

export interface ITableColumns<T> extends ColumnProps<T>{
  
}

class TableTest extends Component<IProps, IStates> {
  state: IStates = {
    selectedRowKeys: [];
  }

  

  render() {
    return (
      <div className={styles.normal}>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default TableTest;
