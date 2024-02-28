const EventHandling = () => {

    let x = ()=>{
        console.log("NOn Parameterised function");
    }

    let y = (num)=>{
        console.log("Parameterised function");
    }
    
    return ( <div>
        <h1>Event HAndling in React</h1>
        <hr />
        <button onClick={x}>invoke x</button>
        <button onClick={()=> {y(10) }}> invoke y </button>

    </div> );
}
 
export default EventHandling;

// EventHandling
//  we can directly invoke non param func  --- onClick={x}
// we have to use callback for invoke parameterised func ---- onClick={()=> {y(10) }