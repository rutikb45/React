
import {useState} from 'react'

function App() {
  let [counter, setCounter] = useState(0);
  return (<>
 <h1>Counter</h1>
  <h1>{counter}</h1>
  <button onClick={()=>setCounter(counter+1)}>Increase</button>
  <button onClick={()=>setCounter(counter-1)}>Decrease</button>
  </>
  );
}

export default App;
