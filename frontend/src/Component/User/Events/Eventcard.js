import React from "react";

export default function Eventcard({ event }) {
    const { name,description,venue,date,start_time,end_time } = event;


    const dateObject = new Date(date); // Corrected the month adjustment
    const monthName = dateObject.toLocaleDateString(undefined, { month: 'long' }).slice(0, 3);


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="custom">
                        <div className="box1">
                            <h1 className="card-subtitle mb-2 text-muted">{dateObject.getDate()}</h1>
                            <h3 className="card-subtitle mb-2 text-muted">{monthName}</h3>
                        </div>
                        <div className="box2">
                            <h5 className="card-title">Event Name : {name}</h5>
                            <p className="card-text">Description : {description}</p>
                            <p className="card-text">Venue : {venue}</p>
                            {/* <p className="card-text">{start_time}</p>
                            <p className="card-text">{end_time}</p> */}
                            {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                        </div>
                        <div className="box1">
                            <p className="card-subtitle mb-2 text-muted">Start : {start_time}</p>
                            <p className="card-subtitle mb-2 text-muted">End : {end_time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
