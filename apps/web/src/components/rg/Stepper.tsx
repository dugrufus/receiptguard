import * as React from "react";

type StepperProps = { step: number; total: number };

export function Stepper({ step, total }: StepperProps) {
  return (
    <>
      {/* [RG:BLOCK UI.STEPPER JSX START] */}
      <div aria-live="polite" className="text-sm opacity-80">
        <span aria-label={`${step} of ${total}`}>{step} / {total}</span>
      </div>
      {/* [RG:BLOCK UI.STEPPER JSX END] */}
    </>
  );
}
export default Stepper;
