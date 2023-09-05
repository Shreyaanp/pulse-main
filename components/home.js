import React from "react";
import ImageCarousel from "./imagecarousel";
export default function Home(){
    return(
<div>
    <div>
        <text
            style={{
                fontSize: 32,
                fontWeight: "bold",
            }}
        >"Crafting the Future of Fashion, <br>
        </br> &nbsp;  One Stitch at a Time."</text>
        <div
            style={{
                backgroundColor: "#F5F5F5",
                height: 2,
                width: 900,
                marginTop: -40,
                height: 450,
                borderRadius: 20,
                paddingTop: 40,
            }}
        >
            <ImageCarousel/>
        </div>
    </div>
</div>
    )
}