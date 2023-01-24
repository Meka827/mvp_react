import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from './FormControl';
// import * as Yup from 'yup';

//browser router
//formik
//look at recoil
//jotai

const FormContainer = (
    { 
        hairstyles, 
        onNext, 
        serviceChange, 
        optionChange, 
        descriptionChange,
        clientChange,
        numberChange, 
        bookAppointment 
    }) => {

    const onSubmit = (event) => {
        event.preventDefault();
        onNext()
    }

    return (

    <div className='form' >
            <form id='input' >
    <div className='form-div' >
        <label htmlFor="">Hair Services</label>
        <select onChange={serviceChange} id="selected-hairstyle" name="selected-hairstyle">
            {hairstyles.map((hairstyle) => <option key={hairstyle.id} value={[hairstyle.id, hairstyle.name]}>{hairstyle.name}</option>)}
            <option defaultValue="null" >Please Select One</option>
        </select>
    </div>
    <div className='form-div' >
     <label htmlFor="">Are You Bringing Your Own Hair?</label>
        <select onChange={optionChange} id="selected-option" name="selected-option" defaultValue="not sure">
            <option defaultValue="null" >Not Sure</option>
            <option value={true}>yes</option>
            <option value={false} >no</option>
        </select>
    </div>
    <div className='form-div' >
        <label htmlFor="">Add A note for your stylist</label>
        <input id='description' onChange={descriptionChange} name="description" type="text" />
    </div>
    <div className='form-div' >
        <label htmlFor="">Your name</label>
        <input onChange={clientChange} id="client" name="name" type="text" />
    </div>
    <div className='form-div' >
        <label htmlFor="">Phone Number</label>
        <input onChange={numberChange} type="number" name="phone-number" required id="phone-number" maxLength="8" />
    </div>
    {/* <div>
    <label htmlFor="">Add image if necessary</label>
    <input type="image" />
    </div> */}
    <button onClick={onSubmit} className='next'>Book Appointment?</button>
</form>
        
    </div>
  );
}

export default FormContainer;
