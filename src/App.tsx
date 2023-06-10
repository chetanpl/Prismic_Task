import React from 'react';
import Layout from './Component/Layout'
// import { RepositoryList } from './Component/RepositoryList';
import { Provider } from "react-redux";
import {store} from './state/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout></Layout>
      {/* <RepositoryList /> */}
    </div>
    </Provider>
  );
}

export default App;
