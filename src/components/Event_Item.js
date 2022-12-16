import React from "react";

const EventItem = (props) => {
    // const context = useContext(eventContext);

    const { event } = props;
    return (
  
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{event.title}</h5>
                    </div>
                    <p className="card-text">{event.description} </p>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
