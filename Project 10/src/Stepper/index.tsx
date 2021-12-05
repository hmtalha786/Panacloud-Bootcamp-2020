import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import Personal from "../components/Personal";
import Account from "../components/Account";
import Review from "../components/Review";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function getSteps() {
  return ["Personal Information", "Account Details", "Review Your Data"];
}

function getStepContent(
  stepIndex: number,
  setStepIndex: React.Dispatch<React.SetStateAction<number>>,
  formValues: {},
  setFormValues: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (stepIndex) {
    case 0:
      return (
        <Personal
          submit={setStepIndex}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 1:
      return (
        <Account
          submit={setStepIndex}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 2:
      return <Review formValues={formValues} submit={setStepIndex} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep, setActiveStep, formValues, setFormValues)}
    </div>
  );
}
