import React, { useContext } from 'react'
import { CounterButtonStyled } from '../counter/CounterStyles'
import { FiDivideCircle } from 'react-icons/fi'
import { RiNumber5 } from 'react-icons/ri'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { COUNTER_TYPES } from '../../actionTypes/counterActions'
import { CountContext } from '../../context/counterContext'

const Substract = () => {

    const {dispatch} = useContext(CountContext)

    const handleDecrement = () => {
        dispatch({type: COUNTER_TYPES.DECREMENT})
    }

    const handleDivide = () => {
        dispatch({type: COUNTER_TYPES.DIVIDE})
    }

    const handleDecrement_5 = () => {
        dispatch({type: COUNTER_TYPES.DECREMENT_5})
    }

  return (
    <>
    <CounterButtonStyled onClick={handleDivide} left>
                <FiDivideCircle  size="32px" color='white' />
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleDecrement_5} >
                <p>
                    -<RiNumber5 size="32px" color="white" />
                </p>
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleDecrement} let>
                <AiOutlineMinusCircle  size="32px" color='white' />
            </CounterButtonStyled>
    </>
  )
}

export default Substract