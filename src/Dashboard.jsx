import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const USERPROFILE_URL = "http://localhost:8000/api/dashboard";
const Dashboard = () => {
    const [profileData, setprofileData] = useState([]);

    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    // console.log(token);
    
    const getProfileData = async () => {
        const request = await fetch(USERPROFILE_URL, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (request.ok) {
            const result = await request.json();
            console.log(result);

            setprofileData(result);
        }
    }


    const handleUpdatedProfileSubmision = async (e) =>{
        e.preventDefault();

        const request = await fetch(USERPROFILE_URL,{
            method:'PATCH',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                "Accept": "application/json",
            }
        })
    }

    useEffect(()=>{
        getProfileData();
    }, []);

    return (
        <>
            <h2>Profile information</h2>

            <div>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" className="bg-stone-100 py-2 px-10 mx-3 mb-5 border rounded-xl"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className="bg-stone-100 py-2 px-10 mx-3 mb-5 border rounded-xl"/>
                    </div>
                    <div>
                        <label htmlFor="email">Phone:</label>
                        <input type="number" name="phone" id="phone" className="bg-stone-100 py-2 px-10 mx-3 mb-5 border rounded-xl"/>
                    </div>
                    {/* <div>
                        <label htmlFor="email">:</label>
                        <input type="email" name="email" id="email" className="bg-stone-100 py-2 px-10 mx-3 mb-5 border rounded-xl"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className="bg-stone-100 py-2 px-10 mx-3 mb-5 border rounded-xl"/>
                    </div> */}
                    <div>
                        <button type="submit" className="px-5 py-2 bg-green-600 text-white rounded-xl">Update profile</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard;