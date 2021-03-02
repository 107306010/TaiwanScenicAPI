import React, { useState } from 'react';
import HomeText from './HomeText';
import TitleComponent from '../ScenicPage/TitleComponent';
import BackGroundImage from './BackGroundImage';
import TaiwanMap from './TaiwanMap';
import ReactToolTip from 'react-tooltip';
import BACKGROUND_IMG from '../../assets/pexels-henry-&-co-3073037.jpg';

const HomePage = () => {
    const [content, setContent] = useState('')

    return (
        <React.Fragment>
            <TitleComponent />
            <BackGroundImage image={BACKGROUND_IMG} />
            <HomeText/>
            <TaiwanMap setContent={ setContent }/>
            <ReactToolTip >{ content }</ReactToolTip>
        </React.Fragment>
    )
}

export default HomePage;