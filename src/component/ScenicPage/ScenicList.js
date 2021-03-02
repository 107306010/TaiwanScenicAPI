import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScenicItem from './ScenicItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const ScenicList = ({ scenics }) => {
    const classes = useStyles();
    
    const renderedItem = scenics.map((scenic) => {
        return (
            <Grid item md={6} lg={4} key={scenic.ID}>
                <ScenicItem scenic={ scenic }/>
            </Grid>
        )
    })
    return (
        <div className={classes.root}>
            <Grid container>
                {renderedItem}
            </Grid>
        </div>
    )
}

export default ScenicList