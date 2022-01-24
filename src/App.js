import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { routerList } from './utils/router';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Header/>
      <Routes>
        {routerList.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
