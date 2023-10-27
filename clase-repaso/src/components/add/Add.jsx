import React, { useContext } from 'react'
import { COUNTER_TYPES } from '../../actionTypes/counterActions'
import { CounterButtonStyled } from '../counter/CounterStyles'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiNumber5 } from 'react-icons/ri'
import { FaRegTimesCircle } from 'react-icons/fa'
import { CountContext } from '../../context/counterContext'

const Add = () => {

    const {dispatch} = useContext(CountContext)

    const handleIncrement = () => {
        dispatch({type: COUNTER_TYPES.INCREMENT})
    }

    const handleIncrement_5 = () => {
        dispatch({type: COUNTER_TYPES.INCREMENT_5})
    }

    const handleMultiply = () => {
        dispatch({type: COUNTER_TYPES.MULTIPLY})
    }

  return (
    <>
        <CounterButtonStyled onClick={handleIncrement}>
            <AiOutlinePlusCircle size="32px" color='white' />
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleIncrement_5}>
            <p>
                +<RiNumber5 size="32px" color="white" />
            </p>
        </CounterButtonStyled>
        <CounterButtonStyled right onClick={handleMultiply}>
          <FaRegTimesCircle size="32px" color="white" />
        </CounterButtonStyled>
    </>
    

  )
}

export default Add