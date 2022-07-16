import './App.css';
import React,{useState} from "react";

export default function App(){
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [op, setOp] = useState();
  const [result, setResult] = useState(0);
  
  function handlenum1(e1){
    setNum1(e1.target.value)
  }
  console.log(num1)
  
  function handlenum2(e){
    setNum2(e.target.value)
  }
  console.log(num2)

  function handleOp(e){
    setOp(e.target.value)
  }
  console.log(op)

  function handleresult(){
    if(op === "+"){
      let ans = Number(num1) + Number(num2)
      setResult(ans)
    }

    else if(op === "-"){
      let ans = Number(num1) - Number(num2)
      setResult(ans)
    }

    else if(op === "*"){
      let ans = Number(num1) * Number(num2)
      setResult(ans)
    }

    else if(op === "/"){
      let ans = Number(num1) / Number(num2)
      setResult(ans)
    }
    
    
    // let ans = Number(num1) + Number(num2)
    // setResult(ans)
  }
  console.log(result)
  return(
    <div className='cal'><center> 
      <p>Enter value for num1 = <input type="number" value={num1} onChange={(e1) => handlenum1(e1)}  /></p>
      <p>Enter value for num2 = <input type="number" value={num2} onChange={(e) => handlenum2(e)}  /></p>
      <p>select operator <select onChange={(e) => {handleOp(e)}} >
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      </p>
      <button type="submit" onClick={handleresult}>result</button>
      
      <h1>{result}</h1>
      </center>
    </div>
  )
}












// import './App.css';
// import Fruit from './fruit';
// import { useEffect } from 'react';

// function App() {
//   const fruits = {
//     name : "Naresh Sharma",
//     fname : "Jagdish Chandra Sharma"
//   }

//   useEffect(() => {
//     console.log(fruits)
// },[])
 

//   return (
//     <div className="App">
//       <Fruit fruits={fruits} />
//     </div>
//   );
// }

// export default App;