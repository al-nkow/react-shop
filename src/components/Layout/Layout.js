// wrapper for other components

import React from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.scss';

import Sidebar from '../../containers/Sidebar/Sidebar';

const layout = (props) => (
    <div className={ classes.wrap }>
        <div className={ classes.sidebar }>
            <Sidebar />
        </div>
        <div className={ classes.mainСontent }>
            { props.children }
        </div>
    </div>
    // <Aux> </Aux>
);

export default layout;