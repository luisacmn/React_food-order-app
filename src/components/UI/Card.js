import React from 'react'
import classes from './Card.module.css'

function Card(props) {
  return (
    <div className={classes.card}>{props.children}</div>  //props.children: tudo o for passado de props e estiver dentro da tag do Card,vai ficar dentro dele. 
  )
}

export default Card