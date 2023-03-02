import React from 'react';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { OptionBox } from '../styled/StyledContainer';
import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconLabelButtons from './IconButton'
import TextField from '@mui/material/TextField';


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormPropsTextFields from './IconButton';



const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];


export default function Selection1() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>
                <ContentContainer>
                    <Bodytext>
                        <h1>Let's find your perfect pet sitter</h1>
                    </Bodytext>
                    <OptionBox width={'100%'}>



                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Bodytext sx={{ pt: '25vh', fontWeight: 'light' }}>
                                    All steps completed - you&apos;re finished
                                </Bodytext>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '35vh' }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>

                                {/* Step1---------------------------------------------------------------- */}
                                <OptionBox>
                                    <Bodytext>
                                        <h3>What needs looking after?</h3>
                                    </Bodytext>
                                    <Stack
                                        direction={'column'}
                                        spacing={3}
                                        marginTop={'40px'}
                                        alignItems={'center'}
                                        display={'flex'}
                                        adjustPosition={'center'}
                                    >
                                        <IconLabelButtons text={'Dogs'} />
                                        <IconLabelButtons text={'Cats'} />
                                    </Stack>
                                </OptionBox>

                                {/* Step2---------------------------------------------------------------- */}
                                <OptionBox>
                                    <Bodytext>
                                        <h3>What does your dog need ?</h3>
                                    </Bodytext>
                                    <Stack
                                        direction={'column'}
                                        spacing={3}
                                        marginTop={'40px'}
                                        alignItems={'center'}
                                        display={'flex'}
                                        adjustPosition={'center'}
                                    >
                                        <IconLabelButtons text={'Day Care'} />
                                        <IconLabelButtons text={'Transportation'} />
                                        <IconLabelButtons text={'Overnight Sitting'} />
                                        <IconLabelButtons text={'Walking'} />
                                        <IconLabelButtons text={'Grooming'} />

                                    </Stack>
                                </OptionBox>

                                {/* Step3---------------------------------------------------------------- */}
                                <OptionBox>
                                    <Bodytext>
                                        <h3>What's your postcode ?</h3>
                                    </Bodytext>
                                    <Stack
                                        direction={'column'}
                                        spacing={3}
                                        m={'40px'}
                                        alignItems={'center'}
                                        display={'flex'}

                                    >
                                        {/* Postcode Input Box */}
                                        <Box
                                            sx={{
                                                '& .MuiTextField-root': { m: 5, width: '20rem' },
                                            }}
                                            noValidate
                                        >
                                            <TextField
                                                id='postcode-field'
                                                label='Your Postcode'
                                                type='number'
                                            />
                                        </Box>

                                    </Stack>
                                </OptionBox>




                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '8vh' }}>
                                    <Button onClick={handleReset}>Reset</Button>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>

                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}





                    </OptionBox>
                </ContentContainer>
            </Container>
        </BannerContainer>
    )
}







