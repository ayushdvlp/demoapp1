// import { Component, useState } from "react";

import { Component } from "react";

// const StateManagement = () => {
//     // 1st way 
//     // let a = 10;
//     // let setA = ()=>{
//     //     a=a+10;
//     //     console.log(a);
//     // }
 
//      // 2nd way 
//     let [a, setA] = useState(10);
//     return ( <div>
//         <h1>state management in React </h1>
//         <hr />
//         <h2>a value is {a} </h2>

//         {/* // by 1st way  */}
//         {/* <button onClick={setA }> update a </button> // it updae on console  */}



// {/* // by 2nd way -- correctly working */}
//         <button onClick={()=>{setA(a+10)}}> update + 10 </button>
//         <button onClick={()=> {setA(a-10)}}>update - 10 </button>
//     </div> );
// }
 
// export default StateManagement;

// useState() --- this hook (method) initially use the value and aply reendering with updated value 
// if the function rendering did not affect the value (like setA(a-0)) -- > than functoin not rendering automatically
// -- cause of its unrequired
   


// by making classs structure



class StateManagement extends Component
{
    constructor()
    {
        super();
        this.state = { count1: 10  , count2 : 100 }
    }
    render()
    {
        return( <div>
                    <h1>this is a class Component</h1>
                    <h1>count 1 is : {this.state.count1} </h1>
                    <hr />
                    <button onClick={()=>{ this.setState({count1 : this.state.count1 + 10}) }}> incr count1 </button>
                </div>)
    }
}

export default StateManagement;

/* class component -- 
1- initiol rendering or Mount
2- Re Rendering  or Update
3- Remove or Unmount  */ 