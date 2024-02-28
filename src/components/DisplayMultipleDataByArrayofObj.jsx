import { useState } from "react"

const DisplayMultipleDataByArrayofObj = () => {
    let [user, setUsers] = useState(
        [
            { uname: "king", id: 1, age: 32, phone: 987654321 },
            { uname: "scott", id: 2, age: 28, phone: 987654332 },
            { uname: "jami", id: 3, age: 25, phone: 987654345 },
            { uname: "dk", id: 4, age: 15, phone: 987654365 },
            { uname: "willson", id: 5, age: 34, phone: 987654376 },
            { uname: "ninja", id: 6, age: 76, phone: 987654378 },
            { uname: "kanachy", id: 7, age: 30, phone: 987654389 },
            { uname: "doremon", id: 8, age: 60, phone: 987654309 }
        ]);
    return (
      <div className="card-list">
        {
            user.map((v,i,a)=>{
                return(
                    <div className="card" key={v.id}>
                        <h1>Username : {v.uname}</h1>
                        <h2>Age : {v.age}</h2>
                        <h3>Phone : {v.phone}</h3>
                    </div>
                )
            })
        }
      </div>
    )
}
export default DisplayMultipleDataByArrayofObj;