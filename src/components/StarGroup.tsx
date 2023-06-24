import React from 'react'
import {ReactComponent as CompleteStar} from "../assets/images/complete-star.svg"
import {ReactComponent as InCompleteStar} from "../assets/images/empty-star.svg"
const StarGroup = () => {
  return (
    <div  className="star-rating">
        <CompleteStar />
        <InCompleteStar />
        <InCompleteStar />
    </div>
  )
}

export default StarGroup