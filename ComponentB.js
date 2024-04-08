import React from 'react'
import { userContext } from '../App';
const ComponentB = () => {
  return (
    <div>
        <userContext.Consumer>
            {value=><div>{value}</div>}
        </userContext.Consumer>
    </div>
  )
}

export default ComponentB