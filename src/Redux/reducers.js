console.log('reducers')

import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
let addexpense = (
    {
      street= '', 
      city = '', 
      amount = '', 
      license = '', 
      createdAt = 0
    }) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    street,
    city,
    amount,
    license,
    createdAt
  }
})
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

let expenseReducersDefaultState = [];

let expenseReducers = (state = expenseReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expenses)
    default:
      return state;
  }
};

// filter reducers
let filterReducersDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

let filterReducers = (state = filterReducersDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// store create
let store = createStore(
  combineReducers({
    expenses: expenseReducers,
    filters: filterReducers
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addexpense({street: 'Shyamoli', city: 'Dhaka'}));

// demo array data
let demoState = {
  expenses: [{
    id: 'asdfsdf',
    street: '4941  Broadcast Drive',
    city: 'HAMMOND',
    license: 'H400-0678-8305 - issued in Illinois (IL) on 12/18/2014, expires 10/26/2019',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'Broadcast',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};