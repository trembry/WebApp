import React from "react";
import { Route, IndexRoute } from 'react-router';

//Page Components
import App from './components/App';

//Routes
export default (
    <Route path="/" component={App}>
        {/* <IndexRoute component={index}/> */}
        {/* <Route path="/some/page" component={SomePage}/> */}
    </Route>
)