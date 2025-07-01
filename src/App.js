// client/src/App.js

import React from 'react';
// PASTIKAN BARIS INI BENAR (tanpa kurung kurawal)
import Layout from './Layout';
import MapComponent from './MapComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <MapComponent />
      </Layout>
    </div>
  );
}

export default App;