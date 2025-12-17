import React from "react";
import DashboardNavBar from "../../components/dashboardNavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () =>{
    return(
        <>
            <DashboardNavBar/>
            <main className="flex gap-10">
                <div>
                    <nav class="flex flex-col gap-7 bg-green-600 justify-center items-center py-5 text-white text-[17px]">
                            <a class="nav-link " href="overview" data-section="overview"><i
                                    class="fas fa-tachometer-alt"></i> Overview</a>
                            <a class="nav-link" href="profile-postes" data-section="posts"><i
                                    class="fas fa-file-alt"></i> My
                                Posts</a>
                            <a class="nav-link" href="profile-mediea" data-section="media"><i class="fas fa-images"></i>
                                Media
                                Library</a>
                            <a class="nav-link" href="profile" data-section="profile"><i class="fas fa-user-circle"></i>
                                Profile</a>
                            <a class="nav-link" href="web-templates" data-section="settings"><i class="fas fa-cogs"></i>
                                Web templates</a>
                            <a class="nav-link" href="section-selection" data-section="section_selection"><i
                                    class="fas fa-cogs"></i>
                                Web section selection</a>
                            <a class="nav-link" href="profile-settings" data-section="settings"><i
                                    class="fas fa-cogs"></i>
                                Settings</a>
                        </nav>
                </div>
                <div>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

export default DashboardLayout