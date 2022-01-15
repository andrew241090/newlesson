import React from 'react';

import css from  './App.module.css'
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
          <div className={css.wrap}>
              <Users/>
              <Posts/>
          </div>
           <div><Comments/></div>
        </div>
    );
};

export default App;