import Login from '../authentication/Login';
import {screen, render} from '@testing-library/react';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

describe("Login Component", ()=>{
    const initialState = {
        USERS: {
          userList: [
            // Your mock user data
            { email: 'prabha@gmail.com', password: 'prabha@123' },
          ],
        },
      };

    test("email input renders", ()=>{
        render(<Login/>)
        const inputBox=screen.getByPlaceholderText("Enter email");
        expect(inputBox).toBeInTheDocument()
    });

    test("get email input",  ()=>{
        const emailInput = screen.getByPlaceholderText("Enter email");
         expect(emailInput).toBeInTheDocument()
    })

  
})

// it('should show error message on invalid submission', async () => {
//     const { getByLabelText, getByRole, queryByText } = render(<Login />);
    
//     // Type in invalid credentials
//     fireEvent.change(getByLabelText('Email address'), { target: { value: 'invalid-email' } });
//     fireEvent.change(getByLabelText('Password'), { target: { value: 'short' } });
    
//     // Submit the form
//     fireEvent.click(getByRole('button', { name: 'Submit' }));
    
//     // Wait for the error message to appear
//     await waitFor(() => {
//       expect(queryByText('Wrong Email or Password')).toBeInTheDocument();
//     });