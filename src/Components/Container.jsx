import React from 'react'
import style from "./Container.module.css";
export default function Container({children}) {
  return (
    <div className={style.parent}>
      {children}
    </div>
  )
}
