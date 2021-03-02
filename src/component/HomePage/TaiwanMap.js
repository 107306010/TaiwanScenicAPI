import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import GeoFile from '../../assets/COUNTY_MOI_1090820.json';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        width: '50vw',
        height: '100vh',
        zIndex: 10,
        left: '50%'
    },
    map: {
        width: '100%',
        height: '100%',
    }
}));

//地圖投影方式
const PROJECTION = 'geoMercator'
//投影設定
const PROJECTION_CONFIG = {
    center: [121, 24],
    scale: 7000
}
//樣式設定
const GEOGRAPHY_STYLE = {
    default: { fill: '#3f51b5' },
    hover: { fill: '#ffdb4d', cursor: 'pointer', stroke: 'black' },
    pressed: { fill: '#ffd11a', stroke: 'black' }
}

const TaiwanMap = ({setContent}) => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <div className={classes.container}>
                <ComposableMap projection={PROJECTION} projectionConfig={PROJECTION_CONFIG} className={classes.map} data-tip='' >
                    <Geographies geography={GeoFile}>     
                        {({ geographies }) =>      
                            geographies.map(geo =>
                                // 按照格式修剪route ex: Taipei City => TaipeiCity => Taipei
                                <Link
                                    key={geo.rsmKey}
                                    to={`/scenicSpot/${geo.properties.COUNTYENG.replace(/\s+/g, '').replace('City', '')}`}>
                                    <Geography
                                        key={geo.rsmKey}                             
                                        geography={geo} style={GEOGRAPHY_STYLE}
                                        onMouseEnter={()=>{setContent(geo.properties.COUNTYNAME)}}
                                        onMouseLeave={()=>{setContent('')}}
                                    />
                                </Link>)}
                    </Geographies>
                </ComposableMap>
            </div>
        </React.Fragment>
    )
}

export default TaiwanMap;