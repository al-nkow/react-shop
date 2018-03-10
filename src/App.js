import React, {Component} from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CreateProduct from './containers/CreateProduct/CreateProduct';
import About from './containers/About/About';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* wrap the app to allow routing */}

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {/*<header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                     <h1 className="App-title">Welcome to React</h1>
                     </header>
                     <p className="App-intro">
                     To get started, edit <code>src/App.js</code> and save to reload.
                     </p>*/}
                    <Layout>

                        <Route path="/" exact render={ () => <h2>HOME PAGE</h2> } />
                        <Route path="/contacts" render={ () => <h2>CONTACTS PAGE</h2> } />
                        <Route path="/products/create" render={ () => {
                            return (<div style={{ width: '50%' }}><CreateProduct /></div>);
                        } } />

                        <Route path="/about" exact component={ About } />


                    </Layout>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
