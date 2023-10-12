// import Home from '../Home';
// import { render, screen } from '@testing-library/react';


// describe('Home Component', ()=>{

//     test("Home renders",  ()=>{
//         render(<Home/>)

//         const a= screen.queryByRole('rowgroup');
//         expect(a).toBeInTheDocument();
//     })
// })
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../Home'; // Adjust the import path

const mockStore = configureMockStore([]);

describe('Home component', () => {
  it('renders the user data correctly', () => {
    const initialState = {
      users: {
        allUsers: [
          { id: 1, name: 'User 1', username: 'user1' },
          { id: 2, name: 'User 2', username: 'user2' },
        ],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Use appropriate queries to assert the presence of user data in the rendered component
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
  });

  it('dispatches removeUser action when delete button is clicked', () => {
    const initialState = {
      users: {
        allUsers: [{ id: 1, name: 'User 1', username: 'user1' }],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    fireEvent.click(screen.getByText('Delete')); // Assuming the delete button has the text 'Delete'

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toBe('users/removeUser');
    expect(actions[0].payload).toBe(1); // Assuming the ID of the user is 1
  });

  // Add more tests for other functionality as needed
});
