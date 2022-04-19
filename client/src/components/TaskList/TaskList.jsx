import { useState } from "react";
import {  Table, Divider  } from 'antd'
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
    render: () => <a>Редактировать</a>,
  },
];





export default function TaskList() {

  const allAddress = useSelector(state=> state.address)
  const dispatch = useDispatch()

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    const currentAddress = [selectedRows[0].address1, selectedRows[0].address2]
    dispatch(getCurrentAddress(currentAddress))
    
  },

};

  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div className={style.wrapper}>


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
