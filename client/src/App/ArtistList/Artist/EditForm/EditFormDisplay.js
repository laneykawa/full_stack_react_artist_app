import React from "react"; 

function EditFormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { name, img, bookingCost, bio } = inputs; 
    return (
        <div>
            <form className="editForm" onSubmit={handleSubmit}>
                <input className="editInput" name="name" onChange={handleChange} value={name} type="text" placeholder="Enter Artist Name"/>
                {/* {name.length ? <p>Thank you for helping us build our talent database!</p> : <p> Artist name is required!</p>} */}
                <input className="editInput" name="img" onChange={handleChange} value={img} type="text" placeholder="Enter Img URL" />
                <input className="editInput" name="bookingCost" onChange={handleChange} value={bookingCost} type="number" placeholder="Booking Cost"/>
                <input className="editInput" name="bio" onChange={handleChange} value={bio} type="text" placeholder="Bio"/>
                <br/>
                <button className="editInput" className="button" >Submit</button>
            </form>
        </div>
    )
}

export default EditFormDisplay; 