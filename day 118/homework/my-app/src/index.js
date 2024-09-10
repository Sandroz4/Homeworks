import React from 'react';
import ReactDOM from 'react-dom';
import HelloBye from './Hello&Bye';
import Counter from './Counter'
import Visible from './VisibleP';
import BgColor from './BackgroundColor';
import Like from './LikeBtn';

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <HelloBye /> */}
    {/* <Visible />  */}
    {/* <BgColor /> */}
    <Like /> 

  </React.StrictMode>,
  document.getElementById('root')
);
