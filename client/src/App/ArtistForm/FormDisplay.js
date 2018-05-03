import React from "react"; 

function FormDisplay(props) {
    const { handleChange, handleSubmit, inputs } = props; 
    const { name, img, bookingCost, bio } = inputs; 
    return (
        <div className="display" >
            <div className="formDisplay">
            <form className="addForm"onSubmit={handleSubmit}>
                <input className="addInput" name="name" onChange={handleChange} value={name} type="text" placeholder="Enter Artist Name"/>
                {/* {name.length ? <p>Thank you for helping us build our talent database!</p> : <p> Artist name is required!</p>} */}
                <input className="addInput" name="img" onChange={handleChange} value={img} type="text" placeholder="Enter Img URL" />
                <input className="addInput" name="bookingCost" onChange={handleChange} value={bookingCost} type="number" placeholder="Booking Cost"/>
                <input className="addInput" name="bio" onChange={handleChange} value={bio} type="text" placeholder="Bio"/>
                <br/>
                <button className="addButton" >Submit</button>
                {/* <ArtistList people={people}></ArtistList> */}
            </form>
            </div>
        </div>
    )
}

export default FormDisplay; 