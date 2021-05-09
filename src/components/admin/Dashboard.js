import React from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Admin | Holidaze</title>
            </Helmet>
            <div className="dashboard">
                <div class="card-group">
                    <div class="card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img  class="logo" src="/visa.svg" alt="Visa"/>
                                <img class="chip" src="/chip.svg" alt="chip"/>
                                <div class="number">1234 5678 9012 3456</div>
                                <div class="name">navn n navnesen</div>
                                <p>valid <br/>thru</p>
                                <div class="date">10/19</div>
                                <div class="ring"></div>
                            </div>
                            <div class="flip-card-back">
                                <div>[placeholder]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
