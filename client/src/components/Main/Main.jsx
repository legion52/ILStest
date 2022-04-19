import React from 'react'
import Map from '../Map/Map'
import TaskList from '../TaskList/TaskList'
import style from './style.module.css'


export default function Main() {

  return (
    <div className={style.main}>
      <TaskList/>
      <Map/>
    </div>
  )
}

