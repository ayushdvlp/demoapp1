import { useEffect, useState } from "react"

const SideEffect = ()=>{
    let[count1 , setCount1] = useState(1);
    let[text , setText] = useState("page1");

    useEffect(()=>{
        document.title = text;
        console.log("title is change");
    } , [text])
    return(
        <div>
            <h1>Side Effect In React</h1>
            <hr />
            <h1>Count 1: {count1}</h1>
            <hr />
            <button onClick={()=>{setCount1(count1+1)}}> change c1 </button>
            <button onClick={()=>{setText(text + 1)}}> change title </button>
        </div>
    )
}

export default SideEffect;