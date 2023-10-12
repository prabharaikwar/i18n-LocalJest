import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosMock from 'axios-mock-adapter';
import axios from 'axios';
import { getAllUsers } from '../../services/reducer/reducer'; // Adjust the import path based on your project structure

const mockStore = configureMockStore([thunk]);
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
     useNavigate: () => mockedUsedNavigate,}));
 
     const mockDispatch = jest.fn();
     jest.mock('react-redux',()=>({
        useSelector:jest.fn(),
        useDispatch:()=>mockDispatch}));
        jest.mock('react-i18next', () => ({
            // this mock makes sure any components using the translate hook can use it without a warning being shown  
     useTranslation: () => {
        return {
            t: (str)=> str,
         };
        },}));

describe('Async Actions', () => {
  let axiosMockInstance;
  let store;

  beforeAll(() => {
    axiosMockInstance = new axiosMock(axios);
  });

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    axiosMockInstance.reset();
  });

  it('should fetch all users', async () => {
    const mockData = [{ id: 1, name: 'User 1' }];
    axiosMockInstance.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockData);

    await store.dispatch(getAllUsers());

    const actions = store.getActions();
    // Write assertions to check the dispatched actions
  });

  // Write more test cases for other async actions
});
