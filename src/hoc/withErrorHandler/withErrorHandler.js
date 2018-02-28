import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null,
        };

        componentWillMount() { // componentDidMount
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
                setTimeout(() => {
                    this.setState({ error: null });
                }, 2000);
                return error;
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render () {
            return (
                <Aux>
                    { this.state.error ? <div style={{color: 'red'}}>{ this.state.error ? this.state.error.message : null }</div> : '' }
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        };
    }
};

export default withErrorHandler;