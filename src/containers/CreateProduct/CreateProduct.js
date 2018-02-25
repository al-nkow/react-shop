import React, { Component } from 'react';
import classes from './CreateProduct.scss';

class CreateProduct extends Component {

    state = { name: '' };
    //
    // toggleMenuHandler = () => {
    //     this.setState({ opened: !this.state.opened });
    // };

    onChangeHandler = (e) => {
        this.setState({ name: e.target.value });
    };

    render () {
        return (
            <div className={ classes.mainBlock }>
                <div>
                    <label htmlFor="cprodname">Name</label>
                    <input type="text" id="cprodname" value={this.state.name} onChange={ (e) => this.onChangeHandler(e) }/>
                </div>
            </div>
            // <div className={ `${classes.wrap} ${this.state.opened ? '' : classes.collapsed}` }>
            //
            //     <div className={ classes.head }>
            //         <IconMenu clickEvent={ this.toggleMenuHandler } iconClass={ classes.iconMenu } />
            //     </div>
            //
            //     <div className={ classes.menuItem }>Menu item</div>
            //     <div className={ classes.menuItem }>Articles</div>
            //     <div className={ classes.menuItem }>Contacts</div>
            //     <div className={ classes.menuItem }>Users</div>
            //     <div className={ classes.menuItem }>About</div>
            //
            // </div>
        );
    }
}

export default CreateProduct;