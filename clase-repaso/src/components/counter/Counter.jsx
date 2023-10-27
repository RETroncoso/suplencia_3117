import React, { useContext } from 'react'
import { CounterContainerStyled, CounterSpanStyled, CounterButtonContainerStyled } from './CounterStyles';
import { CountContext } from '../../context/counterContext';
import Substract from '../substract/Substract';
import Add from '../add/Add';
import Reset from '../reset/Reset';

const Counter = () => {

    const {state} = useContext(CountContext)

    return (
        <CounterContainerStyled>
            <CounterButtonContainerStyled>
                <Substract/>
                <CounterSpanStyled>
                    {state.count}
                </CounterSpanStyled>
                <Add/>
            </CounterButtonContainerStyled>
            <Reset/>
        </CounterContainerStyled>
    )
}

export default Counter