import React from "react";

const DashboardNavBar = () =>{
    return(
        <div className="flex justify-around bg-green-600 py-5 text-white">
            <div className="flex items-center text-4xl font-bold gap-5">
                <img src="images/siteBuilder_logo.jpg" alt="" height='70px' width='100px' />
                <h2>Site Builder</h2>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardNavBar;