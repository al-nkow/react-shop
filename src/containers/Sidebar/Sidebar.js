import React, { Component } from 'react';
import classes from './Sidebar.scss';

import IconMenu from '../../components/icons/IconMenu';

class Sidebar extends Component {

    state = { opened: true };

    toggleMenuHandler = () => {
        this.setState({ opened: !this.state.opened });
    };

    render () {
        return (
            <div className={ `${classes.wrap} ${this.state.opened ? '' : classes.collapsed}` }>

                <div className={ classes.head }>
                    <IconMenu clickEvent={ this.toggleMenuHandler } iconClass={ classes.iconMenu } />
                </div>

                <div className={ classes.menuItem }>Menu item</div>
                <div className={ classes.menuItem }>Articles</div>
                <div className={ classes.menuItem }>Contacts</div>
                <div className={ classes.menuItem }>Users</div>
                <div className={ classes.menuItem }>About</div>

            </div>
        );
    }
}

export default Sidebar;