import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    backgroundImg: {
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 1,
        display: 'block',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        filter: 'blur(3px)',
        opacity: '0.7',
    }
}));
const BackGroundImage = ({ image }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.backgroundImg} style={{backgroundImage: `url(${image})`}}></div>
        </React.Fragment>
    )
}
export default BackGroundImage;