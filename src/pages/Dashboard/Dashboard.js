import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                    <li><Link to="/dashboard/portfolio">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;