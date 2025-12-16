import React from "react";
import DashboardNavBar from "../../components/dashboardNavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () =>{
    return(
        <>
            <DashboardNavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default DashboardLayout