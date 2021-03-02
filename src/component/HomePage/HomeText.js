import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        width: '50vw',
        height: '100vh',
        zIndex: 10,
        backgroundColor: 'white',
        opacity: '0.7',
        filter: 'blur(1px)',
    },
    title: {
        position: 'fixed',
        width: '50vw',
        zIndex: 15,
        left: '0',
        top: '45%',
        display: 'flex',
        flexDirection: 'column',
    },
}));
    
const HomeText = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container}></div>
            <div className={classes.title}>
                <Typography variant='h4' align='center'>Taiwan萊契陶</Typography>
                <Typography align='center'>點選看全部景點或右邊地圖</Typography>
                <Link to='/scenicSpot' style={{textDecoration: 'none', margin: '5px auto'}}>
                    <Button variant="contained" color="primary">全部景點</Button>
                </Link>
            </div>
        </React.Fragment>
        
    )
}

export default HomeText;