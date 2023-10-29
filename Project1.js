import React, { useState } from 'react'
    // Background color Changer
const Project1 = () => {
    const [color, setColor] = useState("orange")

    
  return (
        <div style={{width:"100%",height:"100vh", position:"relative", backgroundColor:color,margin:"0px", padding:"0px"}}>
          
            <div className="box" style={{position:"absolute", top:"85vh",left:"25vw", width:"50%", margin:"auto" ,backgroundColor:"black", display:"flex", borderRadius:"10px" , justifyContent:"space-between", }}>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"white", width:"10%"}} onClick={()=>setColor("White")} >White</button>=
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"Red", width:"10%"}} onClick={()=>setColor("Red")} >Red</button>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"green", width:"10%"}}  onClick={()=>setColor("Green")} >Green</button>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"yellow", width:"10%"}} onClick={()=>setColor("Yellow")} >Yellow</button>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"white", backgroundColor:"Gray", width:"10%"}} onClick={()=>setColor("Gray")} >Gray</button>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"olive", width:"10%"}} onClick={()=>setColor("Olive")} >Olive</button>
                <button style={{margin:"5px", padding:"5px", borderRadius:"10px", color:"black", backgroundColor:"violet", width:"10%"}} onClick={()=>setColor("Violet")} >Violet</button>
                    
            </div>
        </div>  
  )
}

export default Project1
