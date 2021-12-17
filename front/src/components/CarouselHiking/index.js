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
import './carouselHiking.scss';

// Mise en forme fournie par Material UI
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
    objectFit: 'cover',
    width: '100%',
  },
}));

// == Composant
const CarouselHiking = ({ photos }) => {
  // variables fournies par Material UI
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
    <div className="carouselHiking">
      <div className={classes.root}>

        {/* On fait s'afficher toujours la même image (une photo générique de rando)
        quand l n'y a pas d'image avec une Randonnée nouvellement créée */}
        {(photos.length === 0) && (
          <img
            className={classes.img}
            src={`/images/hiking/hike3.jpg`}
            alt="nothing yet"
          />
        )}
        {(photos.length > 0) && (
          <img
            className={classes.img}
            // activeStep permet ici d'ancrer un chiffre, qu'on fera bouger par la suite (cf infra)
            // pour afficher les photos d'avant et d'après dans le Carousel
            src={`/images/hiking/${photos[activeStep].url}.jpg`}
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

CarouselHiking.propTypes = {
  photos: PropTypes.array.isRequired,
};

// == Export
export default CarouselHiking;
