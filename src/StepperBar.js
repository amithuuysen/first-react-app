import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import React from "react";

const StepperBar = () => {
    const stepperProps = [
        {
            Company: "Zoho Corporation",
            Role: "< Full-Stack Web Developer >",
            Content: {
                "Web Application": [
                    "Designed, developed, and maintained web applications using a comprehensive tech stack that included React, Node.js, and Java.",
                    "Led the development of internal tools and web applications tailored to specific business requirements.",
                    "Leveraged Node.js for server-side development, ensuring high performance, scalability and Integrated Java components for specific functionalities requiring robust backend processing.",
                ],
                "Server Performance Audit": [
                    "Spearheaded comprehensive server performance audits to identify bottlenecks and areas of improvement.",
                    "Successfully optimized network calls, reducing latency by 25% and enhancing overall system responsiveness.",
                    "Analyzed and fine-tuned SQL queries, resulting in a 30% reduction in database load and a substantial decrease in query execution times and Improved server-side code by minimizing redundant calls, leading to a 20% decrease in CPU usage.",
                ],
                "Audit Automation Tools": [
                    "Conceptualized and created a cross-platform internal tool using Python and Shell scripting to automate audit processes.",
                    "Pioneered the development of a comprehensive monitoring report generation process, providing coverage for all calls within each API request. This innovation enabled easy analysis, reduced time consumption, and eliminated human errors.",
                    "Successfully automated the issue reporting workflow, effectively reducing the workload for auditors by integrating it with the generated monitoring report.",
                    "Integrated profiling tools and monitoring solutions to track performance metrics, enabling proactive performance management.",
                ],
            },
            Icon: BusinessCenterIcon,
        },
        {
            Company: "Infosys Limited",
            Role: "< Systems Engineer >",
            Content: undefined,
            Icon: AssignmentTurnedInIcon,
        },
    ];
    return (
        <Stepper orientation="vertical">
            {stepperProps.map((props, i) => (
                <Step key={i + 1}>
                    <StepLabel StepIconComponent={props.Icon}>
                        <span className="stepper-company">{props.Company}</span>
                        <span className="stepper-role">{props.Role}</span>
                    </StepLabel>
                    <StepContent>
                        <Typography>
                            {props.Content &&
                                Object.keys(props.Content).map((key, i) => (
                                    <dl className="stepper-dl" key={i + 1}>
                                        <dt className="dl-header">{key}</dt>
                                        <dd>
                                            {props.Content[key].map(
                                                (item, i) => (
                                                    <li key={i + 1}>{item}</li>
                                                )
                                            )}
                                        </dd>
                                    </dl>
                                ))}
                        </Typography>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );
};

export default StepperBar;
