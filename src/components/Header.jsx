import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <section className="flex justify-around items-center">

            <div>
                <img src="images/siteBuilder_logo.jpg" className="h-30 w-30" alt="logo" />
            </div>
            <div>
                <ul className="flex gap-10 font-semibold">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/singin'}>Singin</Link>
                    <Link to={'/singup'}>Singup</Link>
                </ul>
            </div>

        </section>
    )
}

export default Header;