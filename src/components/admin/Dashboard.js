import React from "react";

function Dashboard() {
    return (
            <>
                <div className="dashboard__bg">
                    <div className="dashboard">
                        <div className="tile">
                            <p>Edit establishments</p>
                        </div>
                        <div className="tile">
                            <p>Add establishment</p>
                        </div>
                        <div className="tile">
                            <p>Enquiries</p>
                        </div>
                        <div className="tile">
                            <p>Messages</p>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Dashboard;
