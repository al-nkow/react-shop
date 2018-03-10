import React, { Component } from 'react';
import classes from './Sidebar.scss';
import { Link } from 'react-router-dom';

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

                <Link className={ classes.menuItem } to="/">Home</Link>
                <Link className={ classes.menuItem } to="/products/create">Add Product</Link>

                <div className={ classes.menuItem }>Products</div>

                <Link className={ classes.menuItem } to="/contacts">Contacts</Link>
                {/*<Link className={ classes.menuItem } to="/about">About</Link>*/}
                <Link
                    className={ classes.menuItem }
                    to={{
                        pathname: 'about',
                        hash: '#somehash',
                        search: '?your-param=true'
                    }}
                >About</Link>





            </div>
        );
    }
}

export default Sidebar;