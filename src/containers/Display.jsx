import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Display = () => {

    const dispatch = useDispatch();

    const {a} = useSelector(state => state.custom);

    const addBtn = ()=>{
        dispatch({
            type: 'increment',
        });
    };

    const subBtn = ()=>{ 
        dispatch({
            type: 'decrement',
        })
    }

    const btnByValue = ()=>{
        dispatch({
            type: 'incrementBy25',
            payload: 25,
        })
    }

  return (
    <>
        <h1>{a}</h1>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={btnByValue}>IncrementBy25</button>
    </>
  )
}

export default Display