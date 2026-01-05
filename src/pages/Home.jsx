import React from "react";
import Header from "../components/Header";

const Home = ()=>{
    return(
        <>
           <div className="flex justify-center items-center bg-stone-200 py-10 mx-20 my-20 h-100 rounded-2xl">
                <h2 className="text-4xl">Make your dream website true</h2>
           </div>
           <div className="flex flex-col items-center gap-10">
            <h2 className="text-3xl">Features we provide</h2>
            <div className="flex justify-center gap-20">
                <div>
                <h2 className="text-xl">Select template</h2>
            </div>
            <div>
                <h2 className="text-xl">Customizable template</h2>
            </div>
            <div>
                <h2 className="text-xl">Multipage template support</h2>
            </div>
            </div>
           </div>
        </>
    )
}

export default Home;