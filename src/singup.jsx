import React from "react";
import { Link } from "react-router-dom";
const Singup = ()=>{
    return(
        <>
            <div className="text-center py-20" >
                <div className="text-5xl">Sing up</div>
                <div>
                    <form className="py-5 px-5 flex flex-col gap-7">
                        <div>
                            <input type="text" placeholder="Enter name" name="username" id="username" className="py-2 px-8 border rounded-2xl" />
                        </div>
                        <div>
                            <input type="email" placeholder="Enter email" name="email" id="email" className="py-2 px-8 border rounded-2xl" />
                        </div>
                        <div>
                            <input type="password" placeholder="Enter password" name="password" id="email" className="py-2 px-8 border rounded-2xl" />
                        </div>
                        <div>
                            <input type="password" placeholder="Please enter password again" name="password2nd" id="password2nd" className="py-2 px-8 border rounded-2xl" />
                        </div>

                        <div>
                            <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-2xl font-semibold text-xl">Sing up</button>
                        </div>
                    </form>
                    <div>
                        Already have an account <Link to={'/singin'} className="text-blue-500 px-2">sing in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singup;