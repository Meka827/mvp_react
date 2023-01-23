import React from 'react';
import Modal from './Modal';

const Header = (
  { 
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
    <header className='nav-bar'>
     <h1>Amethyst Flutter</h1>
     <div className='salon' >Salon Services</div>
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
    </header>
  );
}

export default Header;
