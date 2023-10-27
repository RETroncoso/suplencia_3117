import React, { useContext } from 'react'
import { BiReset } from 'react-icons/bi'
import { COUNTER_TYPES } from '../../actionTypes/counterActions'
import { CountContext } from '../../context/counterContext'

const Reset = () => {

    const {dispatch} = useContext(CountContext)

    const handleReset = () => {
        dispatch({type: COUNTER_TYPES.RESET})
    }

  return (
    <BiReset
            cursor="pointer"
            size="38px"
            color='#fafafa'
            onClick={handleReset}
        />
  )
}

export default Reset