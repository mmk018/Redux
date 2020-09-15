import React from 'react';

import {connect} from 'react-redux';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="wrapper">
        <div  id="counter">{counter}</div>
        <div className="buttonsWrapper">
          <div id="inc" onClick={inc} >
            <img  src="./icons/Plus.png" alt="plus"></img>
          </div>
          <div id="dec"  onClick={dec}>
            <img  src="./icons/Minus.png" alt="minus"></img>
          </div>
          <div id="rnd"  onClick={rnd}>
            <img  src="./icons/Reset.png" alt="reset"></img>
          </div>

        </div>


      </div>
    );

    
}
const mapStateToProps = (state) =>{
  return {
    counter: state
  }
}


const mapDispatchToProps = (dispatch) =>{
  const {inc, dec, rnd} = bindActionCreators(
    actions ,dispatch);
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter);
