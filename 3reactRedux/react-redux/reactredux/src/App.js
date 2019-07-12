import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <div>Age: <span>{ this.props.age }</span></div>
                <button onClick={ this.props.onAgeUp }>Age up</button>
                <button onClick={ this.props.onAgeDown }>Age down</button>
                <div>
                    <h2>History</h2>
                    <div>
                        <ul>
                            { this.props.history.map(item => <li key={ item.id } onClick={ () => this.props.onDeleteItem(item.id) }>{ item.age }</li>) }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        history: state.history,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
        onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
        onDeleteItem: (id) => dispatch({ type: 'DELETE_ITEM', key: id }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
