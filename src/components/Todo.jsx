import { useState } from "react"



 function Todo({item,changeCount,todoList,setTodoList}){
   
   const [selected,setSelected]=useState(item.done)
   const [isEditable,setIsEditable]=useState(false);
   const [title,setTitle]=useState(item.title)

   const handleChange=()=>{
      setTodoList(todoList.map((element)=>{
        if (element.id==item.id) {
            return {
                ...element,
                done:!selected?true:false
            }
        }else{
            return element
        }
    }))
      setSelected((prev)=>!prev);
   }

 return(
 <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
   <div onClick={isEditable?()=>{}:handleChange} style={{display:"flex",alignItems:"center",gap:"10px",width:"100%"}}>
   <div  style={{width:"20px",height:"20px",borderRadius:"999px",border:selected?"1px solid darkcyan":"1px solid black",backgroundColor:selected?"darkcyan":"white",cursor:"pointer"}}></div>
    <input type="text"
        onChange={(event)=>{setTitle(event.target.value)}}
        value={isEditable?title:item.title}
        readOnly={!isEditable} style={{
        outline:"none",
        border:"none",
        width:"100%",
        fontSize:"1rem",
        textDecoration:selected?"line-through":"none",
        cursor:isEditable?"default":"pointer"}}/>
   </div>

    <button 
    onClick={()=>{
        setIsEditable(prev=>!prev)
        if (isEditable==true) {
            setTodoList(todoList.map((element)=>{
                if (element.id==item.id) {
                    return {
                        ...element,
                        title:title
                    }
                }else{
                    return element
                }
            }))
        }
    }}
    style={{
        backgroundColor:"darkcyan",
        padding:"10px 15px",
        borderRadius:"10px",
        color:"white",
        border:"none"}}>
        Edit
        </button>


    <button onClick={()=>
    {setTodoList(todoList.filter((element)=>{
            return item.id!==element.id
        }))
    }} 
    style={{backgroundColor:"red",
    padding:"10px 15px",
    borderRadius:"10px",
    color:"white",
    border:"none"}}>
    Delete
    </button>
 </div>
 )

}
export default Todo