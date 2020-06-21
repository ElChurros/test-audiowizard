import React, { useContext } from 'react';

import Context from '../../context';

export function Recap({className, ...props}) {
  const context = useContext(Context);
  return (
    <div className={`d-flex h-100 flex-column justify-content-center align-items-center ${className ? className : ''}`}>
      <h1 className='my-md-5'>{`${context.patient.sex === 'M' ? 'Monsieur ' : context.patient.sex === 'F' ? 'Madame ' : ''}${context.patient.firstName} ${context.patient.lastName}`}</h1>
    </div>
  );
};

export default Recap;