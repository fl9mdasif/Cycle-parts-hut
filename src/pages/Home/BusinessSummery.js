import React from 'react';
import CountUp from 'react-countup';
const BusinessSummery = () => {
    return (
        <div id="summary" className="py-16">
            <h1 className="pb-16 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">BUSINESS SUMMARY</h1>

            <div class="stats gap-10 stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title  ">Countries</div>
                    <div class="stat-value text-yellow-500 p-5">
                        <CountUp start={0} end={25} duration={2.75} />
                    </div>
                    <div class="stat-desc">1995-2022 Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title ">Customers</div>
                    <div class="stat-value p-5 text-green-500">
                        <CountUp start={0} end={4500} duration={2.75} />
                    </div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title ">New Registers</div>
                    <div class="stat-value text-red-500 p-5">
                        <CountUp start={0} end={400} duration={2.75} />
                    </div>
                    <div class="stat-desc">Increased (21%)</div>
                </div>
                <div class="stat">
                    <div class="stat-title ">Reviews</div>
                    <div class="stat-value text-blue-500 p-5">
                        <CountUp start={0} end={900} duration={2.75} />
                    </div>
                    <div class="stat-desc"> Increased (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;