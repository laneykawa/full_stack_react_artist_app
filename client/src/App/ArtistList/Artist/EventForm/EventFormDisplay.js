import React from "react"; 

function EventFormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { name, description, date, location } = inputs; 
    return (
        <div>
            <form className="editEvent" onSubmit={handleSubmit}>
                <input className="eventInput" name="name" onChange={handleChange} value={name} type="text" placeholder="Enter Event Name"/>
                <input className="eventInput" name="description" onChange={handleChange} value={description} type="text" placeholder="Enter Description" />
                <input className="eventInput" name="date" onChange={handleChange} value={date} type="date" placeholder="Enter Date"/>
                <input className="eventInput" name="location" onChange={handleChange} value={location} type="text" placeholder="Locaton"/>
                <br/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default EventFormDisplay;