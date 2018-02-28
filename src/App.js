import React, {Component} from 'react';
// import logo from './logo.svg';

import Layout from './hoc/Layout/Layout';
import CreateProduct from './containers/CreateProduct/CreateProduct';

class App extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/*<header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1 className="App-title">Welcome to React</h1>
                 </header>
                 <p className="App-intro">
                 To get started, edit <code>src/App.js</code> and save to reload.
                 </p>*/}
                <Layout>
                    <div style={{ width: '50%' }}>
                        <CreateProduct />
                    </div>
                </Layout>
            </div>
        );
    }
}

export default App;
