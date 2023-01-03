import logo from './logo.svg';
import {useState} from "react";

function App() {
  const[form,setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  function handleInput(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction',{
      method: "POST",
      body: form,
    });
    console.log(res);
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input 
      type="number"
      name="amount"
      value={form.amount}
      onChange= {handleInput} 
      placeholder="Enter transaction amount" 
      />
      <input type="text"
      name="description"
      value={form.description}
      onChange= {handleInput}
       placeholder="Enter transaction details"
        />
      <input type="date" 
      value={form.date}
      onChange= {handleInput}
      name="date" 
      />
      <button type="Submit">Submit</button>
    </form>
  </div>;
}

export default App;
