import React, { useContext } from 'react';

import Context from '../../context';

export function NameEditor({className, ...props}) {
  const context = useContext(Context);
  return (
    <>
      <div className={`row d-flex justify-content-around align-items-center h-100 ${className}`}>
        <div class="col-md-4 input-group input-group-lg my-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">Nom</span>
          </div>
          <input value={context.patient.firstName} onChange={e => context.patient.setFirstName(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div class="col-md-4 input-group input-group-lg my-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">Prénom</span>
          </div>
          <input value={context.patient.lastName} onChange={e => context.patient.setLastName(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
      </div>
    </>
  )
}

export default NameEditor;