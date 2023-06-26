import { render, screen } from '@testing-library/react';

function ColorList() {
  return (
    <ul> 
    <li>Red</li> 
    <li>Blue</li> 
    <li>Green</li>
    </ul>
  );
}

render(<ColorList />);


test('getBy, queryBy, findBy finding - elements', async () => {
    render(<ColorList />);
  
  //getByRole
  expect(
  () => screen.getByRole('textbox')
  ).toThrow(); //will throw an error if textbox doesn't exist, test will pass
  
  //gueryByRole
  expect(screen.queryByRole('textbox')).toEqual(null); //same here
  
  //findByRole
  let errorThrown = false;
  try {
  await screen.findByRole('textbox');
  } catch (err) {
  errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
  });

test('getBy, queryBy, findBy finding 1 element', async () => {
    render(<ColorList />);
  
    expect(
      screen.getByRole('list')
      ).toBeInTheDocument()
  
     expect(
      screen.queryByRole('list')
      ).toBeInTheDocument()
  
       expect(
      await screen.findByRole('list')
      ).toBeInTheDocument()
  });

  test('getAllBy, queryAllBy, findAllBy', async () => {
    render(<ColorList />);
  //find all by need async
    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(3);
  
   expect(
      screen.queryAllByRole('listitem')
    ).toHaveLength(3);
  
     expect(
      await screen.findAllByRole('listitem')
    ).toHaveLength(3);
  });

  test('verify element doesnt exist with queryBy', () => {
    render(<ColorList />);
  
    const element = screen.queryByRole('textbox');
    expect(element).not.toBeInTheDocument();
  });