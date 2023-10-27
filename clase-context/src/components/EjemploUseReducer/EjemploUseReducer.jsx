import React, { useContext, useReducer } from 'react'
import styled from 'styled-components';
import { Contexto } from '../context/MiContexto';

export const ReducerButton = styled.button`
  padding: 1.5rem 4rem;
  background: var(--primary);
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const EjemploUseReducer = () => {

    const initialState = {
        titleColor: "steelblue"
    };

    const {titulo} = useContext(Contexto)

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return {
                    titleColor: '#e63946'
                };
            case 'verde':
                return {
                    titleColor: '#2a9d8f'
                };
            case 'azul':
                return {
                    titleColor: '#0081a7'
                };
            default:
                return state
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{titulo}</h1>
        <h2 style={{color: state.titleColor}} >Soy un titulo!</h2>
        <ReducerButton
            onClick={() => dispatch({type: 'rojo'})}
        >Rojo</ReducerButton>
        <ReducerButton
            onClick={() => dispatch({type: 'verde'})}
        >Verde</ReducerButton>
        <ReducerButton
            onClick={() => dispatch({type: 'azul'})}
        >Azul</ReducerButton>
    </div>
  )
}

export default EjemploUseReducer