import img from "./img/image-qr-code.png"

export default function Card()
{
    return(        
            <div className = "cardBase">
                <img src={img} className= "QRimg"></img>
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR code to visit Frontend Mentor and take your code skills to the next level</p>
            </div>
       
    )

}