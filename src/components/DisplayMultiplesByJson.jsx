import { useEffect, useState } from "react"

const DisplayMultiplsByJson = () =>{

    let [users , setUsers] = useState(null);

    
    useEffect(
        ()=> {
            setTimeout(() => {
                fetch("https://dummyjson.com/users")
                .then((res)=> res.json())
                .then((data) => {
                    console.log(data.users);
                    setUsers(data.users);
                })
            }, 3000);
        } , []);
    return(
        <div className="card-lists">
            {users==null && <h1>Please Wait ! data is loading</h1>}
            {users!=null && <div className="card-list">
                {
                    users.map((v,i,a)=>{return(
                        <div key={v.id} className="card">
                            <h1>Username : {v.username}</h1>
                            <h6>maidenName : {v.maidenName} , lastname: {v.lastName}</h6>
                            <h2>Age : {v.age}</h2>
                            <h2>Gender : {v.gender}</h2>
                            <h3>email: {v.email}</h3>


                        </div>
                    )})
                }
                </div>}
        </div>
    )
}
export default DisplayMultiplsByJson;