import React, { Component } from 'react';
import classes from './CreateProduct.scss';

import axios from '../../axios-products';

import Spinner from '../../components/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class CreateProduct extends Component {

    state = {
        name: '',
        price: '',
        comments: '',
        loading: false,
    };
    //
    // toggleMenuHandler = () => {
    //     this.setState({ opened: !this.state.opened });
    // };

    onChangeHandler = (e, field) => {
        let obj = {};
        obj[field] = e.target.value;
        this.setState(obj);
    };

    send = () => {
        const data = {
            name: this.state.name,
            price: this.state.price,
            comments: this.state.comments,
            user: {
                name: 'John',
                age: 33,
                address: {
                    city: 'S-Petersburg',
                    street: 'Rybatskiy pr.'
                }
            }
        };
        this.setState({ loading: true });
        axios.post('/products.json', data) // products.json - такое требование к запросам у firebase (обычно просто адрес)
            .then(res => {
                setTimeout(() => {
                    this.setState({ loading: false });
                    console.log('SAVE PRODUCT RESULT: ', res)
                }, 2000);
            })
            .catch(error => {
                this.setState({ loading: false });
                console.log('SAVE PRODUCT ERROR: ', error)
            });
    };

    render () {

        return (
            <div className={ classes.mainBlock }>
                { this.state.loading ? <Spinner /> : <Aux>
                    <div className={ classes.formBlock }>
                        <label className={ classes.label } htmlFor="cprodname">Name</label>
                        <input className={ classes.input } type="text" id="cprodname" value={ this.state.name } onChange={ (e) => this.onChangeHandler(e, 'name') }/>
                    </div>
                    <div className={ classes.formBlock }>
                        <label className={ classes.label } htmlFor="cprodprice">Price</label>
                        <input className={ classes.input } type="text" id="cprodprice" value={ this.state.price } onChange={ (e) => this.onChangeHandler(e, 'price') }/>
                    </div>
                    <div className={ classes.formBlock }>
                        <label className={ classes.label } htmlFor="cprodcomm">Comments</label>
                        <textarea
                            className={ classes.input + ' ' + classes.area }
                            id="cprodcomm"
                            value={ this.state.comments }
                            onChange={ (e) => this.onChangeHandler(e, 'comments') }>
                    </textarea>
                        {/* Добавить Цвета: - с возможностью добавлять/убирать - кнопка Add */}
                    </div>
                    <button onClick={ this.send }>TEST</button>
                </Aux> }
            </div>
        );
    }
}

export default withErrorHandler(CreateProduct, axios);