import React, { Fragment } from 'react'
import MealsSumary from './MealsSumary'
import AvailableMeals from './AvailableMeals'

function Meals() {
  return (
    <Fragment>
      <MealsSumary />
      <AvailableMeals />  
    </Fragment>
  )
}

export default Meals