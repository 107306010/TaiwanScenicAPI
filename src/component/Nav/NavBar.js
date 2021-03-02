import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RegionSelect from './RegionSelect';
import { Region } from './County';

const useStyles = makeStyles((theme) => ({
  navsize: {
    height: 50,
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerPadding: {
    width: '100%',
    height: 64
  }
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.navsize}>
          <Box style={{display: 'flex'}}>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
              <Typography variant="h6" >
                Taiwan萊契陶
              </Typography>
            </Link>
            <Link to='/scenicSpot' style={{textDecoration: 'none', color: 'white', marginLeft: '10px'}}>
                <Typography variant="h6">
                  全部景點
                </Typography>
            </Link>
          </Box>
          <Box>
            <RegionSelect region="北部地區" regionList={Region.NORTH_REGION}/>
            <RegionSelect region="中部地區" regionList={Region.MIDDLE_REGION}/>
            <RegionSelect region="南部地區" regionList={Region.SOUTH_REGION}/>
            <RegionSelect region="東部地區" regionList={Region.EAST_REGION}/>
            <RegionSelect region="離島地區" regionList={Region.ISLAND_REGION }/>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={ classes.headerPadding}/>
    </React.Fragment>
  );
}

export default NavBar;