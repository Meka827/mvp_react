import React, { useState, useEffect } from 'react';


const Appointments = ({ hairstyles, handleClick, setDeleted }) => {
  const [ appointment, setAppointment ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/appointments", {
       mode:"cors",
   })
   .then((res) => res.json())
   .then(result => {
    setAppointment(result);
   });
}, [])

const clicked = (event) => {
  setDeleted(event.currentTarget.id)
  handleClick(event.currentTarget.id)
}


return (
  <div className='appt-body' >
        <h2>Upcoming appointments</h2>

  <div id="appt">
    {appointment.map((appt) => {
      let name = "";
      for (let style of hairstyles){ 
      if(style.id === appt.hairstyles_id) {
        name = style.name;
      }
      }

      return(
    <div key={appt.id} className="appt" >
    <span id={appt.id} onClick={clicked} >
    <i className="fa-solid fa-trash"></i>    
      </span>
      <h3>Client: {appt.client}</h3>
        <h4>({appt.phone_number.slice(0, 3)}) {appt.phone_number.slice(3, 6)}-
        {appt.phone_number.slice(6, 10)}</h4>
      <h4>Style: {name} </h4>
      <h5>{
      appt.hair_option ? 
      "Client is bringing hair" : 
      "Don't forget to get hair for client."
      } 
      </h5>
      <h6>{appt.notes !== "" ? (`Client Notes: ${appt.notes}`) : null}</h6>
    </div>
    )}
    )}
  </div>
  </div>
);
}

export default Appointments;
