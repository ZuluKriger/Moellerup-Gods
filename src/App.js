import React from 'react';
import AppHeader from './components/header/AppHeader';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AppContent from './components/content/AppContent';
import AppFooter from './components/footer/AppFooter';



function App() {
  return (
    <div className="">
      <div className="sitewrapper">
        <BrowserRouter>
          <AppHeader />
          <AppContent />
            <Route exact path="/">
              
            </Route>
        </BrowserRouter>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
