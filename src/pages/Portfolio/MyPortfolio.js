import React from 'react';
import doctor from '../../img/React-App.png'
import miStore from '../../img/Mi-store-BD.png'
import captured from '../../img/Captured-Moments.png';


const MyPortfolio = () => {
    return (
        <div className=' '>
            <h1 className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">MD ASIF AL AZAD</h1>

            <h1>Email: asifalazadami2021@gmail.com</h1>
            <h1>Educational Background: B.Sc. Engineering in CSE - 1st year</h1>



            <div className=" container mx-auto grid lg:grid-cols-2  py-20  grid sm:grid-cols-1  lg:grid-cols-3 gap-3 ">
                <div className="ml-10">
                    <div class="card w-96 bg-base-100  shadow-xl">
                        <div class="card-body">
                            <h2 class="text-neutral card-title">MREN STACK DEVELOPMENT</h2>
                            <p>Html, Css, Bootstrap, Tailwind, React, daisiUi, react-router, firebase-authentication, expressJs, node.js, MongoDb, Github, Herokuu </p>
                        </div>
                    </div>
                </div>
                <div className="ml-10 w-75">
                    <div class="mb-1  text-start text-base text-stone-400 font-medium">HTML 95%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '95%' }} className="bg-orange-400  h-2.5 rounded-full " ></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-stone-400">VANILLA CSS 90%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '90%' }} className="bg-blue-600 blue-600 h-2.5 rounded-full w-50" ></div>
                    </div>
                    <div class="mb-1 text-base font-medium text-stone-400">BOOTSTRAP 96%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '96%' }} className="bg-purple-600 yellow-400 h-2.5 rounded-full w-50" ></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-stone-400">TAILWIND CSS 97%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '93%' }} className="bg-blue-600 indigo-600 h-2.5 rounded-full w-50" ></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-stone-400">VANILLA JAVASCRIPT 89%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '89%' }} className="bg-yellow-600 red-600 h-2.5 rounded-full w-50" ></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-stone-400">REACT 92%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '92%' }} className="bg-cyan-400 green-600 h-2.5 rounded-full w-50" ></div>
                    </div>



                    <div class="mb-1 text-base font-medium text-stone-400">NODE JS 85%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '85%' }} className="bg-green-600 purple-600 h-2.5 rounded-full w-50" ></div>
                    </div>
                    <div class="mb-1 text-base font-medium text-stone-400">EXPRESSjs 85%</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div style={{ width: '85%' }} className="bg-green-600 purple-600 h-2.5 rounded-full w-50" ></div>
                    </div>
                </div>
            </div>

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={doctor} alt="doctor" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Doctors Portal
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p> MERN_STACK Based on react js, user can book a appointment, set appoint </p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>
                        <button className='btn btn-neutral'><a href="https://doctors-portal-8cc0b.web.app/">Doctors Portal</a></button>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={miStore} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Mi Store
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p>MERN_STACK mi store is developed by react, responsive, add product, manage product</p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>
                        <button className='btn btn-neutral'><a href="https://mobile-warehouse-fd23b.web.app">mi Store</a></button>


                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={captured} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Captured Moments
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p>The best click will provide you by CapturedMoment. MERN_STACK</p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>

                        <button className='btn btn-neutral'><a href="https://capturedmoment.firebaseapp.com/">Captured Moments</a></button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;