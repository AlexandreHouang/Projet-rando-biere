// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import material UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// == Import
import './carousel.scss';

// Formatting provided by Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,

  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    height: '420px',
    objectFit: 'cover',
  },
}));

// == Composant
const Carousel = ({ photos, main_img }) => {
  // Variables provided by Material UI
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = photos.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="carousel">
      <div className={classes.root}>

        {/* When there are no photos associated with a Brewery yet, we display the main_img */}
        { (photos.length === 0) && (
        <img
          className={classes.img}
          src={`/images/breweries/${main_img}.jpg`}
          alt="nothing yet"
        />
        )}
        { (photos.length > 0) && (
        <img
          className={classes.img}
          // activeStep allows here to anchor a number, which we will move later
          // to display the before and after photos in the Carousel (see below)
          src={`/images/breweries/${photos[activeStep].url}.jpg`}
          alt={photos[activeStep].label}
        />
        )}

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={(
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Suivant
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Précédent
            </Button>
          )}
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
};

// == Export
export default Carousel;
