import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({title}) => {
    const defaultTitle = 'Taiwan萊契陶';
    return (
        <Helmet>
            <title>{ title ? title : defaultTitle}</title>
        </Helmet>
    )
}


export default TitleComponent;