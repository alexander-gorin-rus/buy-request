import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { StyledTrackerContainer } from '../styles';
import { stepsDelivery } from '../../../../utils/constants';

function Tracker() {
  const activeStep = 0;

  return (
    <StyledTrackerContainer>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepsDelivery.map((step) => (
          <Step key={step.id}>
            <StepLabel>
              {step.description}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </StyledTrackerContainer>
  );
}

export default Tracker;
