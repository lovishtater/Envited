import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import './createEvent.css';

interface IEvent {
    eventname: string;
    hostname: string;
    starttime: string;
    endtime: string;
    location: string;
}

function CreateEvent() {
    const [eventDetails, setEventDetails] = useState<IEvent>({
        eventname: "",
        hostname: "",
        starttime: "",
        endtime: "",
        location: "",
    });
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const  onSubmit = () => {
        setError("");
        if (eventDetails.eventname === "" || eventDetails.hostname === "" || eventDetails.starttime === "" || eventDetails.endtime === "" || eventDetails.location === "") {
            setError("Please fill all the fields");
        } else {
        navigate("/event", { state: eventDetails });
        }
    }

    const handleChange = (input: string) => (e: any) => {
        setEventDetails({ ...eventDetails, [input]: e.target.value });
    };
    return(
        <div className="create-event-container">
            <div className="create-event">
                <h2>Enter information about the Birthday Event</h2>
                <div className='birthday-event-form'>
                    <div>
                        <label htmlFor="eventName">Event Name</label>
                        <input id='eventName' className="eventName" name='eventName' type='text' onChange={handleChange('eventname')} value={eventDetails.eventname} />
                    </div>
                    <div>
                        <label htmlFor="hostName">Host Name</label>
                        <input id='hostName' className="hostName" name='hostName' type='text' onChange={handleChange('hostname')} value={eventDetails.hostname} />
                    </div>
                    <div>
                        <label htmlFor="startTime">Start Time</label>
                        <input id='startTime' className="startTime" name='startTime' type='datetime-local' placeholder="Eg. 18 August 2022, 6:00 PM" onChange={handleChange('starttime')} value={eventDetails.starttime} />
                    </div>
                    <div>
                        <label htmlFor="endTime">End Time</label>
                        <input id='endTime' className="endTime" name='endTime' type='datetime-local' placeholder="Eg. 19 August 2022, 10:30 AM" onChange={handleChange('endtime')} value={eventDetails.endtime} />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input id='location' className="location" name='location' type='text' placeholder="Eg. Times Square Brm, New York City, New York" onChange={handleChange('location')} value={eventDetails.location} />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button onClick={()=> onSubmit()}>Next</button>
                </div>
            </div>
        </div>
    );
}
export default CreateEvent;