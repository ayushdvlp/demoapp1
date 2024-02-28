import { useState } from "react"

const Parent = ()=>{
    let[a , setA ] = useState(10);
    return (<>    <h1>{a}</h1>
    <Child a = {a}/></>)
    

}

export default parent;
const  child = ({a}) = => {
    return (<>
    <h1>{a}</h1>
    </>)
}

export default child;