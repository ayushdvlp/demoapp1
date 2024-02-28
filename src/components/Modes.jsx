import { useState } from "react";

                
const Mode = () => {

    let[darkmode , setDarkmode] = useState(false)

    let lightTheme = {
                    width:"100vw",
                    height:"100vh",
                    backgroundColor : "lightblue",
                    color : "black"
                }

    let darkTheme = {
        width:"100vw",
        height:"100vh",
        backgroundColor : "black",
        color : "lightblue"
    }

    return ( <div style={darkmode ? darkTheme : lightTheme} className="cont">


                <h1> Light mode and Dark Mode in React</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut facere deserunt minus enim voluptate illum dolorem temporibus expedita, explicabo amet hic impedit! Dignissimos error ratione doloribus esse magni numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus impedit quis vel dolorem odio illum esse, aspernatur nesciunt ullam! Perspiciatis maxime cum doloremque placeat rem minus corporis facere amet!</p>

                <button onClick={()=>{setDarkmode(!darkmode)}}> 
                        {darkmode ? "🌞" : "🌚"  }
                </button>
            
            </div> );
}
 
                
export default Mode;