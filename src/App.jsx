import useCounter from "./hooks/useCounter";

function App() {
  const { count, plus, minus,reset, increment,decrement } = useCounter();
  console.log(count);
  return <div>
    <button onClick={()=>plus()}>increment</button>
    {count}
    <button onClick={()=>minus()}>decrement</button><br/>

    <button onClick={()=>increment()}>increment 5</button>
    {}
    <button onClick={()=>decrement()}>decerement 5</button><br/>
    <button onClick={()=>reset()}>reset</button>
    </div>;
}

export default App;
