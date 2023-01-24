import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
  
const Navbar = ({ 
  openModal,
  modalStatus, 
  closeModal, 
  hairstyles, 
  onNext, 
  serviceChange, 
  optionChange, 
  descriptionChange,
  clientChange,
  numberChange, 
  bookAppointment 
}) => {
  return (
    <>
      <nav className="nav-bar" >
        <div className="menu" >
          <Link className="link" to="/menu" activestyle="true">
          Amethyst Flutter
          </Link>
          <Link className="link" to="/appointments" activestyle="true">
          Salon Services
          </Link>
          <button id='btn' onClick={openModal} >Book Appointment</button>
     <Modal 
     modalStatus={modalStatus} 
     closeModal={closeModal} 
     hairstyles={hairstyles}
     onNext={onNext}
     serviceChange={serviceChange}
     optionChange={optionChange}
     descriptionChange={descriptionChange}
     clientChange={clientChange}
     numberChange={numberChange}
     bookAppointment={bookAppointment}
    />
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;