import React from 'react';

const Styles = ({ hairstyles }) => {
    
  return (
    <div>
        <h2>Menu</h2>
      {hairstyles.map((style) => 
      <div key={style.id} className="style" >
        <h3>{style.name} <b>${style.price}</b></h3>
        
        <p>{style.description}</p>
      </div>)}
    </div>
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
