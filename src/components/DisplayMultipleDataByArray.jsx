import { useState } from "react"

const DisplayMultipleDataByArray = ()=> {
    let [user , setUsers] = useState( ["alex" , "scott" , "king" ,"robert" ,"adam"]);

    return(
        <div>
            {
                user.map((v,i,a)=>{
                    return(
                        <h1 key={i}>{v}</h1>
                        // in map method , whenever we pass multiple element , make shure each element  (templlet) has unique key 
                    )
                })
            }
        </div>
    )
}

export default DisplayMultipleDataByArray;