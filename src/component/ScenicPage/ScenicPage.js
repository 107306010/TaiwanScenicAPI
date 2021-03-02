import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ptxapi from '../../api/ptxapi';
import lazyLoad from '../../lazyload/lazyload';
import NavBar from '../Nav/NavBar';
import ScenicList from './ScenicList';
import TitleComponent from './TitleComponent';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const ScenicPage = ({ city }) => {

  const classes = useStyles();
  
  const [scenics, setScenics] = useState([]);
  const [skipScenics, setSkipScenics] = useState(0);
  const [isLast, setIsLast] = useState(false)
  const pageRef = useRef();

  const getResponse = useCallback(() => {
    const gettingResponse = async (country) => {
      const response = await ptxapi.get(`${country}`, {
        params: {
          $top: 30,
          $skip: skipScenics,
          $format: 'json'
        }
      })

      //搜尋有結果
      if (response.data.length > 0) {
        setScenics(scenics.concat(response.data));
      } else { //沒結果(沒有景點了)設定文字提醒
        setIsLast(true)
      }
    }
    gettingResponse(city)
  }, [skipScenics])
    
  useEffect(() => {
    getResponse()
  }, [getResponse])
  
  //偵測滑到底自動載入
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    //get the last item in the ScenicList
    const target = pageRef.current.lastChild.lastChild.lastChild;
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          //console.log("load data")  
          setSkipScenics(skipScenics + 30) 
          observer.unobserve(entry.target)
        }
      }) 
    }
    const observer = new IntersectionObserver(callback, options)
    //do not observe when first load
    if (target) {
      observer.observe(target)
    }

    //lazy load 圖片
    lazyLoad();
  }, [scenics]);
    
  return (
    <React.Fragment>
      <TitleComponent title={city} />
      <NavBar />
      <Typography variant="h6" className={classes.title} align='center'>
        {city === ''? 'All Scenics' : city}
      </Typography>
      <div ref={pageRef}>
        <ScenicList scenics={scenics}/>
      </div>
      <Typography variant="h6" className={classes.title} align='center'>
        { isLast? '沒有更多景點了':''}
      </Typography>
    </React.Fragment>
    )
}

export default ScenicPage;