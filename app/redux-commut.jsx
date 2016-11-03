var redux = require('redux');

//This is a reducer which is a pure function; the reducer takes your the existing state and the action as arguments and it computes the new state. So if you trigger an action to change the state of an object with an action, and then the reducer would return the new state.


var stateDefault = {
  
};

var reducer = (state = stateDefault, action) => {

  return state;
};

var store = redux.createStore(reducer);


//This getState method returns our object that currently has a name property of "Anonymous"
var currentState = store.getState();
