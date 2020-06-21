import React, { useContext } from 'react';

import Context from '../../context';

export function SexEditor({className, nextStep, ...props}) {
  const context = useContext(Context);
  return (
    <div className={`row d-flex justify-content-around align-items-center h-100 ${className}`}>
      <button onClick={e => {context.patient.setSex('M'); nextStep()}} className='btn btn-light btn-lg'>Homme</button>
      <button onClick={e => {context.patient.setSex('F'); nextStep()}} className='btn btn-light btn-lg'>Femme</button>
    </div>
  );
}

export default SexEditor;