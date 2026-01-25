import React from "react";
import AdminNabBar from "./AdminNavBar";
import { Outlet } from "react-router-dom";

const AdminLayout = ()=>{
    return(
        <>
            <nav>
                <AdminNabBar/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default AdminLayout;