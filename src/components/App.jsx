import React from 'react';
import { RouteTransition } from 'react-router-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default (props) => {
  var path = props.location.pathname;
  var segment = path.split('/')[1] || 'root';
  return (
    <div className="app">

      <ReactCSSTransitionGroup transitionName="example"
        transitionEnterTimeout={700} transitionLeaveTimeout={700}>
        {React.cloneElement(props.children, { key: segment })}
      </ReactCSSTransitionGroup>

    </div>
  );
}
