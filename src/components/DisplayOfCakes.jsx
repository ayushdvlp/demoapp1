import { useState } from "react"

const DisplayOfCakes = ()=>{
    let [cakes , setCakes] = useState(
        [
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPj4s_EtQhHmMVcFsjYgpdVD4tWZH-SgH9g&usqp=CAU",
                product : "choco-chips cake",
                bakery : "ramulla bakes",
                price : 600
            },
            
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQG20hdwtQstanIkULtOfF5l8Wf_zcErZwg&usqp=CAU",
                product : "red belbed cake",
                bakery : "reema bakes",
                price : 550
            },
            
            {  
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwdoGkeaLm0Zlx3c79S0YdxyyLvz5gq2zFA&usqp=CAU",
                product : "strawberry cake",
                bakery : "H B T bakes",
                price : 680
            },
            
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtf1gqlTZy52W2bUtBBhfLpI8MxIYOoBHOHQ&usqp=CAU",
                product : "hammer pinata cake",
                bakery : "Enrich bakes",
                price : 900
            },
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEdKKwQlGvMee1ng8-XFpFDLnrdjEnJS41A&usqp=CAU",
                product : "black-current cake",
                bakery : "BABA bakes",
                price : 1200
            },
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2CTU9ZxoqnhlPx8mA6773ioGwsLBgNIZlg&usqp=CAU",
                product : "vanilla cake",
                bakery : "handArt bakes",
                price : 1300
            },
            {
                productView : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tiL_Xy9lPHj0j-idXMkekV-YRsKeS0NcJw&usqp=CAU",
                product : "friut-punch cake",
                bakery : "Milans bakes",
                price : 749
            } 
        ]
    )

    return (
        <div className="cakes">
            {
                cakes.map((p,i,a)=>{
                    return(
                        <div className="product">
                           
                                <img src={p.productView} alt="" />
                                <h1>{p.product}</h1>
                                <h2>{p.bakery}</h2>
                                <h2>MRP: {p.price}</h2>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayOfCakes;