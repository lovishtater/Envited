import './eventPage.css';
import BirthdayCake from '../../assets/img/BirthdayCake.png';
import { useLocation } from "react-router-dom";
import { GoCalendar } from 'react-icons/go';
import { MdLocationOn } from "react-icons/md";


export default  function EventPage() {
    const loc = useLocation();
    const { eventname, hostname, starttime, endtime, location} = loc.state
    const startTime = starttime.split('T')[1] + ', ' + starttime.split('T')[0];
    const endTime = endtime.split('T')[1] + ', ' + endtime.split('T')[0];
    return (
      <div className="event-container">
        <div className="event">
          <div className="Bday-img">
            <img src={BirthdayCake} className="birthdaycake-image" alt="birthday cake image" />
          </div>
          <div className="birthday-container">
            <h2>{eventname || "Elysia birthday party"}</h2>
            Hosted by <span>{hostname || "Elysia"}</span>
            <div className="event-row">
              <div className="icons">
                <GoCalendar />
              </div>
              <div className="event-text">
                <span>{startTime}</span>
                <br />
                To: <span> {endTime} </span>
              </div>
            </div>
            <div className="event-row">
              <div className="icons">
                <MdLocationOn />
              </div>
              <div className="event-text">
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
