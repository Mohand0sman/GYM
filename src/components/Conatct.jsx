import React from "react";
import aboutimage from "../images/about.png";
function Conatct() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Tap Yuor E-mail " required/>
                <textarea placeholder="Write Here......" name="messege"></textarea>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}
export default Conatct;