import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../UI/Button';
import Comment from '../Reviews/Comment';
import Rate from '../Reviews/Rate';
import Summary from '../Reviews/Summary';

export default function StepperFunction() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Stepper step={step} onNext={handleNext} onBack={handleBack} />
    </>
  );
}

// Stepper component
const Stepper = ({ step, onNext, onBack }) => {
  return (
    <>
     <div className='flex justify-between list-none font-Manbold'>
        <li>Rate</li>
        <li className='ml-8'>Comment</li>
        <li>Summary</li>

      </div>
      <div
        className={`relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-1 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100  ${
          step === 2
            ? 'after:bg-accent after:w-1/2'
            : step === 3
            ? 'after:bg-accent after:w-full'
            : ''
        }`}
      >
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-700">
          <li className="flex items-center gap-2">
            <span
              className={`size-6 rounded-full text-white text-center text-[10px]/6 font-bold ${
                step >= 1 ? 'bg-blue-500' : 'bg-accent'
              }`}
            >
              1
            </span>
          </li>

          <li className="flex items-center gap-2">
            <span
              className={`size-6 rounded-full text-center text-[10px]/6 font-bold ${
                step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              2
            </span>
          </li>

          <li className="flex items-center gap-2">
            <span
              className={`size-6 rounded-full text-center text-[10px]/6 font-bold ${
                step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              3
            </span>
          </li>
        </ol>
      </div>
     
      <div className="">
        {/* Render the appropriate section based on the step */}
        {step === 1 && <Rate />}
        {step === 2 && <Comment />}
        {step === 3 && <Summary />}
      </div>

      <div className="flex gap-4 justify-end w-full my-12">
        {step > 1 && (
          <div>
            <Button variant="secondary" onClick={onBack} className="!px-6">
              Back
            </Button>
          </div>
        )}

        <div>
          <Button  variant="primary" onClick={onNext} className="!px-6 text-white">
            {step < 3 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </div>
    </>
  );
};

// Prop validation for Stepper component
Stepper.propTypes = {
  step: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};