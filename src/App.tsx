import React from 'react';
import Layout from './Component/Layout'
import { Provider } from "react-redux";
import {store} from './state/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout></Layout>
    </div>
    </Provider>
  );
}

export default App;
