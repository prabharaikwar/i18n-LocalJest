import { store } from '../../store/Store' // Adjust the import path based on your project structure

describe('Redux Store', () => {
  it('should have an initial state', () => {
    const initialState = store.getState();
    // Write assertions to check the initial state
  });

  // Write more test cases to cover different aspects of your store
});
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import reducer from '../services/reducer/reducer'; // Adjust the import path
// import { store } from '../../store/Store'; // Adjust the import path

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('Redux store', () => {
//   it('dispatches the correct action and updates the state', () => {
//     const initialState = {
//       users: {
//         allUsers: [],
//         error: null,
//         loading: false,
//       },
//     };

//     const expectedAction = { type: 'users/addUser', payload: { id: 1, name: 'New User' } };
//     const store = mockStore(initialState);

//     store.dispatch(expectedAction);

//     const actions = store.getActions();
//     expect(actions).toEqual([expectedAction]);

//     const newState = store.getState();
//     expect(newState.users.allUsers).toContainEqual({ id: 1, name: 'New User' });
//   });
// });
