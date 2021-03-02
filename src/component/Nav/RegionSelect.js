import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    root: {
        color: 'rgb(255, 219, 77)',
        fontWeight: 'bold'
    },
    icon: {
        color: 'rgb(255, 219, 77)',
    },
    linkText: {
        textDecoration: 'none',
        color: 'black',
        width: '100%'
    }
}));

const RegionSelect = ({region, regionList}) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <Select
                value=''
                displayEmpty
                disableUnderline
                inputProps={{ 'aria-label': 'Without label' }}
                classes={{root: classes.root, icon: classes.icon}}
            >
                <MenuItem value="" disabled selected>{ region }</MenuItem>
                {regionList.map( regionlist => {
                    return (
                        <MenuItem
                            key={regionlist.VALUE}
                            component={Link}
                            to={`/scenicSpot/${regionlist.VALUE}`}>
                            {regionlist.COUNTRY_NAME}
                        </MenuItem>
                        )
                })}
            </Select>
        </FormControl>
  );
}

export default RegionSelect;