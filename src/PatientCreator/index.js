import React, { useContext } from 'react';

import NameEditor from './NameEditor';
import SexEditor from './SexEditor';
import Recap from './Recap';
import Context from '../context';

export function PatientCreator({className, ...props}) {
  const [step, setStep] = React.useState(0);
  const context = useContext(Context);
  const stepTexts = [
    "Peux-tu indiquer l'identité du patient ?",
    "Peux-tu indiquer son sexe ?",
  ]

  return (
    <div className='container-fluid p-0 h-100 d-flex flex-column'>
      {stepTexts[step] && <h2 className='text-center'>{stepTexts[step]}</h2>}
      <div className='flex-fill'>
        {step === 0 && <NameEditor />}
        {step === 1 && <SexEditor nextStep={() => setStep(step + 1)} />}
        {step === 2 && <Recap/>}
      </div>
      <div>
        {step === 0 &&
          <button onClick={() => {context.patient.firstName.length > 0 && context.patient.lastName.length > 0 && setStep(step + 1)}} className='btn'>
            <svg class="bi bi-arrow-right-square-fill" width="3rem" height="3rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm5.646 10.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
            </svg>
        </button>
        }
        {step === 1 &&
          <button onClick={() => setStep(step - 1)} className='btn'>
            <svg class="bi bi-arrow-left-square-fill" width="3rem" height="3rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.354 10.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
            </svg>
          </button>
        }
      </div>
    </div>
  );
};

export default PatientCreator;