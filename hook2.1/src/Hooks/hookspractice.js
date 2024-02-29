import React from 'react';
import {useState,useEffect} from 'react';
import { useMemo,useRef } from 'react';
import '../App.css';

export default function Hook(){
    const [counter, setCounter] = useState(5);
    const [secoundCounter , setSecoundCounter] = useState(1);

    useEffect(()=>{
     setCounter(counter+1);      //for [] useEffect working as a componentDidMount
                                 // for [secoundCounter] working as componenetDidUpdate
    },[secoundCounter]);
    
    const  IncrementSecoundCounter = () => {
        setSecoundCounter(secoundCounter+1);
    }

    /////////////////////////////////////////////////////
    const Increment = () => {
        setCounter(counter+1);
    }

    const Decrement = () => {
        setCounter(counter-1);
    }
return(
     <>
       <div className='App'> Count ,{counter}--{secoundCounter} </div>
       <button onClick={IncrementSecoundCounter}>Increment Secound</button>
      {/* <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button> */}
     </>
)
}

export function Hooks(){
    // debugger
const[name,setName] = useState("Neha");
console.log(`I am 1${name}`);
useEffect(()=>{
    setName("Deepika");
    console.log(`I am 2 ${name}`);
},[name])


return(

    <>
    {console.log(name)}
    <h3>I'm {name}</h3>
    <hr/>
    </>
);
}

// useMemo:
export function HookMemo(){
    const[count,setCount]=useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const increment = () => {
        setCount((c) => c + 1);
      };

      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return(
        <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr/>
</div>
      );
};
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
    
  };

  //useRef:


export function HookRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

