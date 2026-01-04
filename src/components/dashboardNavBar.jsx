import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardNavBar = () =>{
    const   LOGOUT_URL = 'http://localhost:8000/api/logout';
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const logout = async()=>{
        const request = await fetch(LOGOUT_URL,{
            method:'POST',
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
        if(request.ok){
            const responce = await request.json();
            console.log(responce);
            navigate('/singin');
        }
    }
    return(
        <div className="flex justify-around items-center bg-green-600 py-5 text-white">
            <div className="flex items-center text-4xl font-bold gap-5">
                {/* <img src="images/siteBuilder_logo.jpg" alt="" height='70px' width='100px' /> */}
                <h2>Site Builder</h2>
            </div>
            <div>
                <ul>
                    <Link className="bg-red-500 text-white px-5 py-3 rounded-xl" to='/logout' onClick={logout} >Logout</Link>
                </ul>
            </div>
        </div>
    )
}

export default DashboardNavBar;