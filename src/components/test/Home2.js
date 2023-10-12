import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../Home';
import { BrowserRouter as Router } from 'react-router-dom';
// import axiosMock from 'axios-mock-adapter';
// import axios from 'axios';
// import thunk from 'redux-thunk';
// import { getAllUsers } from '../../services/reducer/reducer'; // Adjust the import path based on your project structure

// const mockStore = configureMockStore([thunk]);
// const mockedUsedNavigate = jest.fn();jest.mock('react-router-dom', () => ({
//     ...(jest.requireActual('react-router-dom')),
//      useNavigate: () => mockedUsedNavigate,}));
 
//      const mockDispatch = jest.fn();
//      jest.mock('react-redux',()=>({
//         useSelector:jest.fn(),
//         useDispatch:()=>mockDispatch}));
//         jest.mock('react-i18next', () => ({
//             // this mock makes sure any components using the translate hook can use it without a warning being shown  
//      useTranslation: () => {
//         return {
//             t: (str)=> str,
//          };
//         },}));

const mockStore = configureMockStore([]);

describe('Home Component', () => {
    const initialState = {
        users: {
            allUsers: [
                { id: 1, name: 'Leanne', username: 'Bret' },
                { id: 2, name: 'Ervin', username: 'Antonette' },
            ],
        },
    };
    const store = mockStore(initialState);
    // render(
    //     <Provider store={store}>
    //       <Home />
    //     </Provider>
    //   );

    render (<Home/>,{
      wrapper: Provider
    })
      test('should render table with user data', async() => {
    // Check if user data is rendered
    
    const user1Elements = await screen.findByRole('rowgroup');
    // const user2Elements = await screen.findByText('Ervin',{timeout:2000});
     screen.debug(user1Elements);
    expect(user1Elements).toBeInTheDocument(); // At least one element contains "User 1"
    // expect(user2Elements).toBeInTheDocument();
    // expect(user2Elements.length).toBeGreaterThan(0); 

    // expect(screen.queryAllByText('Leanne Graham')).toBeInTheDocument();
    // expect(screen.queryAllByText('Ervin Howell')).t oBeInTheDocument();
});
  test('should handle user deletion', () => {
    const initialState = {
      users: {
        allUsers: [
          { id: 1, name: 'Leanne', username: 'Bret' },
          { id: 2, name: 'Ervin', username: 'Antonette' },
        ],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
        <Home />
        </Router>
      </Provider>
    );
    // Mock API response for successful user deletion
    // // Dispatch the appropriate action to simulate user deletion

    // Check if deleted user is no longer in the table
    expect(screen.queryByText('Leanne')).toBeNull();
  });
});