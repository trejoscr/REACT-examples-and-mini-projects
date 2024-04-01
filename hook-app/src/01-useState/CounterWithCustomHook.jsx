import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => { 

  const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <button className='btn btn-primary' onClick={()=>decrement(3)}>-1</button>
      <button className='btn btn-primary' onClick={reset}>Reset</button>
      <button className='btn btn-primary' onClick={() => increment()}>+1</button>
    </>
  )
}