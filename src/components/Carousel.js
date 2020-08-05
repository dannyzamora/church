import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby";

import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { autoPlay } from "react-swipeable-views-utils";

import Img from "gatsby-image"

const useStyles = makeStyles({
    carousel: {
        maxWidth: 850
    }
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ images }) => {

    const classes = useStyles()

    console.log(images)
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleStepChange = activeStep => {
        setActiveStep(activeStep);
    };
    const maxSteps = images.length;
    return (
        <Paper elevation={0} className={classes.carousel}>
            <div>
                <AutoPlaySwipeableViews
                    axis={"x"}
                    enableMouseEvents
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                >
                    {images.map((item, index) => {
                        return (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Card>
                                        <CardMedia>
                                            <Img
                                                fluid={item.node.childImageSharp.fluid}
                                            />
                                        </CardMedia>
                                        {/* <CardContent>
                                        </CardContent> */}
                                    </Card>
                                ) : null}
                            </div>
                        );
                    })}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    activeStep={activeStep}
                    backButton={
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            size="small"
                        >
                            Back
          </Button>
                    }
                    nextButton={
                        <Button
                            disabled={activeStep === maxSteps - 1}
                            onClick={handleNext}
                            size="small"
                        >
                            Next
          </Button>
                    }
                    position="static"
                    steps={maxSteps}
                />
            </div>
        </Paper>
    );
}


export default Carousel
