import { Step, StepLabel, Stepper } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import React from "react";

const StepperBar = () => {
    const stepperProps = [
        { Label: "Zoho Corp.", Content: "", Icon: BusinessCenterIcon },
        { Label: "Infosys Limited", Content: "", Icon: AssignmentTurnedInIcon },
    ];
    return (
        <div>
            <Stepper orientation="vertical">
                {stepperProps.map((props) => (
                    <Step>
                        <StepLabel StepIconComponent={props.Icon}>
                            <h3>{props.Label}</h3>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default StepperBar;
