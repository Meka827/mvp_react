import React from 'react';

const Styles = ({ hairstyles }) => {
    
  return (
    <>
    <h2>Menu</h2>
    <div className='styles'>
        
      {hairstyles.map((style) => 
      <div key={style.id} className="style" >
        <p>{style.name} <b>${style.price}</b></p>
        
        <p>{style.description}</p>
      </div>)}
    </div>
    </>
  );
}

export default Styles;






// import React from 'react';

// const Styles = () => {
//   return (
//     <div>

//     </div>
//   );
// }

// export default Styles;
