import React from "react"

function Home(props){
    console.log('props',props.data.cardItems)

    return  <div>

                <div className="item">

                <img src="https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/Samsung_Galaxy_S21_Black_Ultra_5G_lrg2.png"
                    alt="samsung galaxay S21 phone "    
                    width="80px"
                    height="100px"
                />

                <span> Samsung </span>

                <span> Price: $1000.00</span>
                <button onClick={()=>{
                    props.addToCartHandler({price:1000,
                    name:"Samsung"})
                }} >Add to cart</button>

                <button onClick={()=>{
                    props.removefromCartHandler()
                }} >Remove from cart</button>
                </div>
        
    </div>

}

export default Home