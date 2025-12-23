import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <section className="flex justify-around items-center bg-blue-600 text-white py-5">

            <div>
                {/* <img src="images/siteBuilder_logo.jpg" className="h-25 w-25" alt="logo" /> */}
                <h2 className="text-4xl font-bold">Site Builder</h2>
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