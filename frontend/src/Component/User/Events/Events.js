import React, { useState, useEffect } from 'react'
import '../../../Style/users/Events/Events.css'
import Eventcard from './Eventcard.js';
import { Fetchevents } from '../../../Service/Events/Fetchevents';
import GetUserEvent from '../../../Service/Events/Fetchevents';

const getUserEvent = new GetUserEvent();

export default function UserEvents() {
    const [eventData, setEventData] = useState([]);
    const [filterStartDate, setFilterStartDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');



    async function fetchData() {
        try {
            const data = await getUserEvent.getAllEvents();
            console.log(data)
            setEventData(data);
        } catch (error) {
            console.error('Error fetching event data:', error);
        }

        
    }

    useEffect(() => {
        fetchData() 
       }, [])

    // if (eventData.length === 0) {
    //     return <div>Loading...</div>;
    // }




    // const dummy = [
    //     {
    //         'eventname': 'turf',
    //         'start_date': '2023-09-17',
    //         'end_date': '2023-10-17'
    //     },
    //     {
    //         'eventname': 'holiday',
    //         'start_date': '2023-09-19',
    //         'end_date': '2023-10-17'
    //     },
    //     {
    //         'eventname': 'public',
    //         'start_date': '2023-09-12'

    //     },
    //     {
    //         'eventname': 'holiday',
    //         'start_date': '2023-11-19'
    //     },

    //     {
    //         'eventname': 'thai',
    //         'start_date': '2023-11-29'
    //     }
    // ]


    const filteredEvents = eventData.filter(event => {

        if (!filterStartDate) {
            return true;
        }


        const eventStartDate = new Date(event.start_date);
        const filterDateObj = new Date(filterStartDate);

        return (
            eventStartDate.getFullYear() === filterDateObj.getFullYear() &&
            eventStartDate.getMonth() === filterDateObj.getMonth() &&
            eventStartDate.getDate() === filterDateObj.getDate()
        );


    });

    const handleTodayButtonClick = () => {
        const today = new Date();
        setFilterStartDate(today);
    };

    const filteredEventsByName = eventData.filter(event => {
        if (!searchQuery) {
            return true;
        }
        console.log("eventname",event.eventname.toLowerCase())
        console.log("searchevent",searchQuery.toLowerCase())
        return event.eventname.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <h2>
                Upcoming Events
            </h2>
            <div className="contain">
                <div className='filters'>
                    <input
                        className='date'
                        type="date"
                        placeholder='date'
                        value={filterStartDate}
                        onChange={e => setFilterStartDate(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Search events"
                    value={searchQuery}
                    className='search'
                    onChange={e => setSearchQuery(e.target.value)}
                />
                    <button onClick={handleTodayButtonClick} className='btn btn-primary'>Today</button>
                </div>
                
                <div className='scrollable'>
                    {filteredEvents.map((event, index) => (
                        <Eventcard key={index} event={event} />
                    ))}
                </div>
                {/* <div className='scrollable'>
                    {filteredEventsByName.map((event, index) => (
                        <Eventcard key={index} event={event} />
                    ))}
                </div> */}
            </div>
        </>
    )
}