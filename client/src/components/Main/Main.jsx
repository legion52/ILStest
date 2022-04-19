import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddress } from '../../redux/action/taskAC'
import Map from '../Map/Map'
import TaskList from '../TaskList/TaskList'
import style from './style.module.css'


export default function Main() {
  const data = useSelector(state => state.currentAddress)
  const dispatch = useDispatch()
  dispatch(getAllAddress())
  return (
    <div className={style.main}>
      <TaskList/>
      <Map data={data} />
    </div>
  )
}

