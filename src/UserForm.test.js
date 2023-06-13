import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';
import { specialCharMap } from '@testing-library/user-event/dist/keyboard';

test('it shoes two inputs and a button', () => {
    // render the component
    render(<UserForm onUserAdd={() => {}}/>);

    // manipulate the component or find an element in it
const inputs = screen.getAllByRole('textbox');
const button = screen.getByRole('button');

    //assertion - make sure component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted',  () => {
//     //NOT THE BEST IMPLEMENTATION
//     const argList = [];
//     const callback = (...args) => {
//         argList.push(args);
// } //try to render component
// render(<UserForm onUserAdd={callback} />);
// const [nameInput, emailInput] = screen.getAllByRole('textbox');  //find the two inputs
// user.click(nameInput);
// user.keyboard('jane'); //simulating typing in a name
// user.click(emailInput);
// user.keyboard('jane@jane.com'); //simulating typing in an email
// const button = screen.getByRole('button'); //find the button
// user.click(button);//simulate clicking the button
// expect(argList).toHaveLength(1);
// expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });//assertion to make sure 'onUserAdd' gets called with email/name

//BETTER IMPLEMENTATION
const mock = jest.fn(); //create a mock function
//try to render component
render(<UserForm onUserAdd={mock}/>);
 //find the two inputs
const nameInput = screen.getByRole('textbox', {
    name: /name/i,
});
const emailInput = screen.getByRole('textbox', {
    name: /enter email/i,
})
//simulating typing in a name
user.click(nameInput);
user.keyboard('jane'); 
//simulating typing in an email
user.click(emailInput);
user.keyboard('jane@jane.com'); 
 //find the button
const button = screen.getByRole('button');
//simulate clicking the button
user.click(button);
//assertion to make sure 'onUserAdd' gets called with email/name
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});

test('empties the two inputs when form is submitted', () => {
render(<UserForm onUserAdd={() => {}} />);

const nameInput = screen.getByRole('textbox', { name: /name/i });
const emailInput = screen.getByRole('textbox', { name: /email/i });
const button  = screen.getByRole('button');
user.click(nameInput);
user.keyboard('jane');
user.click(emailInput);
user.keyboard('jane@jane.com');
user.click(button);

expect(nameInput).toHaveValue('');
expect(emailInput).toHaveValue('');

});