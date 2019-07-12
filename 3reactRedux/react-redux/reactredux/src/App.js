import React from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends React.Component {

  render() {
    return (
        <div>
          <div>Age: <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        age: state.age
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP'}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
