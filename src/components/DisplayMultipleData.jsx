import { useState } from "react"

const DisplayMultipleData = () => {
    let [products, setProducts] = useState(
        [
            {
                Pname: "red -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230620/facG/64921e0142f9e729d75961c6/-1117Wx1400H-463194484-red-MODEL.jpg"
            },
            {
                Pname: "blue -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230620/63Yj/6492088a42f9e729d75720b6/-473Wx593H-463194482-blue-MODEL.jpg"
            }, {
                Pname: "green -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230620/facG/64921e0142f9e729d75961c6/-1117Wx1400H-463194484-red-MODEL.jpg"
            }, {
                Pname: "white -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230620/facG/64921e0142f9e729d75961c6/-1117Wx1400H-463194484-red-MODEL.jpg"
            }, {
                Pname: "black -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230621/Tisl/6492532742f9e729d761eecd/campus-black-running-textured-low-tops-ankle-lace-up-sports-shoes.jpg"
            }, {
                Pname: "grey -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230810/Ckn7/64d4e6bceebac147fcbc9b0f/campus-grey-outdoor-knitted-outdoor-shoes-with-lace-fastening.jpg"
            }, {
                Pname: "multi -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230522/C3fa/646b8a7b42f9e729d7a25f2c/-473Wx593H-469425373-red-MODEL.jpg"
            }, {
                Pname: "purple -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://assets.ajio.com/medias/sys_master/root/20230306/6rpg/640607b3aeb26924e3a7568c/adidas-kids-tech-purple-lace-ups-gb2298-low-top-lace-up-shoes.jpg"
            }, {
                Pname: "black&white -casuals",
                brand: "adidas",
                price: 10000,
                pic: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/3/u/1/6-air-socks7-black-6-gusto-black-original-imaggstzewyavddz.jpeg?q=70"
            },

        ]
    );

    return (
        <div className="container">
            {
                products.map((p, i, a) => {
                    return (
                        <div className="product">
                            <img src={p.pic} alt="" />
                            <h1>{p.Pname}</h1>
                            <h2> brand - {p.brand},MRP - {p.price}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayMultipleData;