import React, { useState } from "react";
import eventContext from "./eventContext";

const EventState = (props) => {
  const host = "http://localhost:5000";
  const eventsInitial = [];
  const [events, setEvents] = useState(eventsInitial)

  // Get all Events---------------------------
  const getEvents = async() => {
    // api call
    const response = await fetch(`${host}/api/events/fetchallEvents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
    });
    const json = await response.json()
    setEvents(json)
  }

  const peventsInitial = [];
  const [pevents, psetEvents] = useState(peventsInitial)
  const getEventsPublic = async() => {
    // api call
    const response = await fetch(`${host}/api/events/pnotes`, {
      // const response = await fetch(`${host}/api/events/fetchallEvents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()
    psetEvents(json)
  }

  // Delete Event------------------------------
  const deleteEvent = async(id) => {
    // api call
    const response = await fetch(`${host}/api/events/deleteEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
    });
    const json = response.json();
    console.log(json)

    // deleting client side
    const newEvents = events.filter((event) => {
      // filter creates a new array by removing elements that don't belong.....The filter() method creates a new array....The filter() method does not change the original array
      return event._id !== id;
    });
    setEvents(newEvents);

  }



  // update Event---------------------------------
  const editEvent = async (id, title, description) => {
    // api call
    const response = await fetch(`${host}/api/events/updateEvent/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json);

    let newEvents = JSON.parse(JSON.stringify(events))
    // logic to edit in client side
    for (let index = 0; index < newEvents.length; index++) {
      const element = newEvents[index];
      if(element._id === id){
        newEvents[index].title = title;
        newEvents[index].description = description;
        break;
      }
    }
    setEvents(newEvents);
  }

    // adding event
    const addEvent = async(title, description, url) => {
      // api call
      const response = await fetch(`${host}/api/events/addEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, url }),
      });
      const event = await response.json();
      //cleint side 
    setEvents(events.concat(event))
    }

  
    return (
      <eventContext.Provider
        value={{ pevents, events, getEvents, getEventsPublic, setEvents, editEvent, deleteEvent, addEvent}}
      >
        {props.children}
      </eventContext.Provider>
    );
};
export default EventState;



