import React, { useContext } from 'react';

import Context from '../../context';

export function SexEditor({className, nextStep, ...props}) {
  const context = useContext(Context);
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-around'>
        <button onClick={e => {context.patient.setSex('M'); nextStep()}} className='btn btn-light btn-lg'>Homme</button>
        <button onClick={e => {context.patient.setSex('F'); nextStep()}} className='btn btn-light btn-lg'>Femme</button>
      </div>
    </div>
  );
}

export default SexEditor;