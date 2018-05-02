import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={() => this.props.onSubractCounter}  />
            </div>
        );
    }
}
//CounterControl are component buttons
const mapStateToProps = state => {
    return {
        ctr: state.counter
        //accessing counter property on global state managed by redux ctr can be used inside component
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        //type property INCREMENT
        //can add value property
        //or as many properties as you want to dispatch
        //instead of hardcoding how much to add or subtract
        //will be refered in Counter as action.propertyname
        //or payload: {}
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubractCounter: ()=> dispatch({type: 'SUBTRACT'})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//connect is a HOF that exporting connected Counter
//name mapStateToProps is up to you to define

//connect is a function that returns a high order component
//name mapStateToProps is up to you to define
