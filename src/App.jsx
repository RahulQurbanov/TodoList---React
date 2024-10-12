import { useEffect, useState } from 'react'
import Todo from './components/Todo'



function App() {

  const [todos,setTodos]=useState([])
  const [length,setLength]=useState(0)
   useEffect(()=>{
    let unDoneCount=0
    todos.map((element=>{
      if (!element.done) {
        unDoneCount++;
      }
    }))
    setLength(unDoneCount)
   })


  const [todoTitle,setTodoTitle]=useState("")
  const [count,setCount]=useState(0)
  const [status,setStatus]=useState("Active")

  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"darkcyan",height:"100vh",width:"auto"}}>
    <div style={{backgroundColor:"white", display:"flex",width:"40%",padding:"30px 20px",borderRadius:"10px",flexDirection:"column",gap:"20px"}}>
      <div style={{display:"flex",gap:"20px"}}>
      <input onChange={({target})=>{setTodoTitle(target.value)}} type="text" style={{width:"100%",outline:"none",border:"none",borderBottom:"3px solid grey"}} />
      <button onClick={()=>{if(todoTitle){setTodos((prev)=>[...todos,{id:Math.floor(Math.random()*10000),title:todoTitle,},]); setTodoTitle("")}}} style={{backgroundColor:"darkcyan",padding:"10px 20px",borderRadius:"10px",border:"none",color:"white"}}>Add</button>
      </div>
      <h3>You have {length} task(s) to complete</h3>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div onClick={()=>{setStatus("Active")}} style={{border:"1px solid darkcyan",padding:"10px 20px",borderRadius:"20px",width:"10%",textAlign:"center",cursor:"pointer",backgroundColor:status=="Active"?"darkcyan":"white",transition:"200ms all",color:status=="Active"?"white":"darkcyan"}}>Active</div>
        <div onClick={()=>{setStatus("Done")}} style={{border:"1px solid darkcyan",padding:"10px 20px",borderRadius:"20px",width:"10%",textAlign:"center",cursor:"pointer",backgroundColor:status=="Done"?"darkcyan":"white",transition:"200ms",color:status=="Done"?"white":"darkcyan"}}>Done</div>
      </div>

      {todos.map((item)=>{
        if (status=="Active") {
          return !item.done&&<Todo key={item.id}  changeCount={setCount} item={item} todoList={todos} setTodoList={setTodos} ></Todo>
        }else{
          return item.done&&<Todo key={item.id}  changeCount={setCount} item={item} todoList={todos} setTodoList={setTodos} ></Todo>
        }
          })}
    </div>
  </div>
  )
}

export default App
