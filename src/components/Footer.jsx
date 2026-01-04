import React from "react";

const Footer = ()=>{
    return (
        <div className="flex justify-around items-center bg-black text-white py-5 mt-10">
            <div>
                <h2 className="text-2xl py-5">SiteBuilder</h2>
                <p>Email:sitebuilder@gmail.com<br/>Phone:4654654135</p>
            </div>
            <div>
                <p>&copy;Copywrite</p>
            </div>
        </div>
    )
}

export default Footer;