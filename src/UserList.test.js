import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    const users = [
        { name: 'jane', email: 'jane@jane.com'},
        { name: 'sam',  email: 'sam@sam.com'}
    ];
    render(<UserList users={users} />);
    return {
   users,     
    };
};

test('render one row per user', () => {
//1st approach using testId

 //Render the component
 renderComponent();

//find all the rows in the table
//screen.logTestingPlaygroundURL(); //help to find query in testing playground
const rows = within(screen.getByTestId('users')).getAllByRole('row'); 

//assertion: correct number of rows in the table
expect(rows).toHaveLength(2);

//2nd aproach using container
const { container } = render(<UserList users={users} />); //Render the component
// //eslint-disable-next-line
const rows2 = container.querySelectorAll('tbody tr'); //find all the rows in the table
expect(rows2).toHaveLength(2); //assertion: correct number of rows in the table
});

test('render the email and name for each user', () => {
  const { users } = renderComponent();
   for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email});

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
   }
});