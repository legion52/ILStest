// const {  useState  } = React;
// const {  Table, Radio, Divider  } = antd;
import { useState } from "react";
import {  Table, Radio, Divider  } from 'antd'
import style from './style.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAddress } from "../../redux/action/taskAC";
const columns = [
  {
    title: '№   ',
    dataIndex: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Погрузка',
    dataIndex: 'address1',
  },
  {
    title: 'Разгрузка',
    dataIndex: 'address2',Divider
  },
  {
    title: 'действие',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];





export default function TaskList() {

  const allAddress = useSelector(state=> state.address)
  const dispatch = useDispatch()

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows[0].address1, selectedRows[0].address2);
    const currentAddress = [selectedRows[0].address1, selectedRows[0].address2]
    dispatch(getCurrentAddress(currentAddress))
    
  },
  // getCheckboxProps: (record) => ({
  //   disabled: record.name === 'Disabled User',
  //   // Column configuration not to be checked
  //   name: record.name,
  // }),
};

  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div className={style.wrapper}>
      {/* <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group> */}

      <Divider />

      <Table className={style.task}
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={allAddress}
      />
    </div>
  );
}
