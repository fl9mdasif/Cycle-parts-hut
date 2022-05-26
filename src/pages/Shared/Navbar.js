import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

    const menuItems =
        <>
            <li><Link to='/home' href="#2">Home</Link></li>
            <li><Link to='/products' href="#2">Products</Link></li>
            <li><Link to='/blog' href="#2">Blog</Link></li>
            {/* <li><Link to='/home#summary' href="#summary">Business Summary</Link></li> */}
            <li><Link to='/review' href="#2">Reviews</Link></li>
            <li><Link to='/about' href="#2">About </Link></li>

            {
                user && <li><Link to='/dashboard' className=" text-black text-decoration-none"> Dashboard</Link></li>
            }
            {
                user ?
                    <button onClick={handleSignOut} className="btn btn-primary text-white border-none shadow-md bg-gradient-to-r  from-secondary to-primary"> Sign Out</button>
                    :
                    <li><Link to='login' href="#2">Login</Link></li>
            }

        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" >
                            {menuItems}

                        </ul >
                    </div >
                    <a href="/home" className="btn btn-ghost normal-case text-xl" > Cycle Parts BD</a >
                </div >
                <div className="navbar-center hidden lg:flex" >
                    <ul className="menu menu-horizontal p-0" >
                        {menuItems}
                    </ul >
                </div >
                <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label >
                </div>

            </div >
        </div >
    );
};

export default Navbar;