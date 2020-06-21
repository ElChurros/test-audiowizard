import React, { useContext } from 'react';

import Context from '../../context';

export function Recap({className, ...props}) {
  const context = useContext(Context);
  return (
    <h1 className={`my-md-5 ${className ? className : ''}`}>{`${context.patient.sex === 'M' ? 'Monsieur ' : context.patient.sex === 'F' ? 'Madame ' : ''}${context.patient.firstName} ${context.patient.lastName}`}</h1>
  );
};

export default Recap;