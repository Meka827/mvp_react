import React from 'react';
import FormContainer from './FormContainer';

const Modal = (
  { 
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
    <div id="myModal" className={modalStatus} >
        <div className='modal-content' >
            <span onClick={closeModal} className='close'>Cancel</span>
            <FormContainer 
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
    </div>
  );
}

export default Modal;
