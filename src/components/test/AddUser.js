// import AddUser from '../AddUser';
// import { render, screen ,fireEvent} from '@testing-library/react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from  'react-redux'; 

// jest.mock("react-router-dom", ()=>{
// jest.requireActual('react-router-dom');
// return{
//   useNavigate: jest.fn(), // Mock the useNavigate function
// }
// });
// const mockDispatch = jest.fn();
// jest.mock('react-redux',()=>({
//   useSelector:jest.fn(),
//   useDispatch:()=>mockDispatch
// }));

// const mockNavigate= jest.fn();
// jest.mock('react-redux', () =>
//  ({  
//   ...(jest.requireActual('react-router-dom')),
//   useNavigate:() => mockNavigate,
//  }))
  
//   // useSelector: jest.fn(),  
//   // useDispatch: () => mockDispatch}));




// describe("Demonstrating some useNavigate() tests",()=>{
//   it("renders AddUser component", ()=>{
//     render(
//       <AddUser/>
//     );
//     const formLbl = screen.getByText(/Body/i);
//     expect(formLbl).toBeInTheDocument();
//   })
// })

// // test('AddUser Component Input Testing', () => {
// //     render(<AddUser/>);
// //     const idInput = screen.getByLabelText('ID');
// //     fireEvent.change(idInput, { target: { value: '123' } });
// //     // const linkElement = screen.getByText(/CRUD/i);
// //     // expect(linkElement).toBeInTheDocument();
// //     expect(idInput.value).toBe('123');
// //   });
 

