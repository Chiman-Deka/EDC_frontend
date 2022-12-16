import React, { useContext, useEffect} from 'react'
// import { useNavigate } from "react-router-dom";
import EventItem from './Event_Item';
import eventContext from '../context/events/eventContext';

const Events  = () => {
    const context = useContext(eventContext);
    const { pevents, getEventsPublic } = context ;
    
    useEffect(() => {
        getEventsPublic();              

    }, [])  
    // const history = useNavigate();
  
    // const clicked = () => {
    //     history('/events')
    // }
    return (
        <div>
            <div className="row my-3">
                <h2>Events</h2>
                <div className="container mx-2">
                {pevents.length ===0 && 'No events to display'}
                </div>
                {pevents.map((event) => {
                    return <EventItem event={event} />
                })}
            </div>
        </div>

    )
}

export default Events;