import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,incrementByAmount,reset} from '../features/counter/counterSlice';
export default function Counter() {
    const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
   <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-4'>
        <button className='border border-gray-300 p-2 rounded-md' onClick={()=>dispatch(increment())}>increment</button> <span>{count}</span> <button className='border border-gray-300 p-2 rounded-md' onClick={()=> dispatch(decrement())}>decreament</button>
        <button className='border border-gray-300 p-2 rounded-md' onClick={()=> dispatch(incrementByAmount(5))}>icremet by 5</button>
        <button className='border border-gray-300 p-2 rounded-md' onClick={()=> dispatch(reset())}>reset</button>
    </div>
  )
}
