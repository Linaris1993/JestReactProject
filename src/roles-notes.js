//1st - role examples
import { render, screen } from '@testing-library/react';
function RoleExample() {
  return (
    <div>
      <a href="/">Link</a>
      <button>Button</button>
      <footer>Contentinfo</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      <img alt="description" />
      Img
      <input type="checkbox" /> Checkbox
      <input type="number" /> Spinbutton
      <input type="radio" /> Radio
      <input type="text" /> Textbox
      <li>Listitem</li>
      <ul>ListGroup</ul>
    </div>
  );
}
  render(<RoleExample />);

  test('find elements by role', () => {
    render(<RoleExample />);
    const roles = [
    'link',
    'button',
    'contentinfo',
    'heading',
    'banner',
    'img',
    'checkbox',
    'spinbutton',
    'radio',
    'textbox',
    'listitem',
    'list'
    ];
    for (let role of roles) {
      const el = screen.getByRole(role);
      expect(el).toBeInTheDocument();
    }
    });

//2nd find btns by accessible name
function AccessibleName() {
  return (
    <div>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
render(<AccessibleName />);

test('select by accessible name', () => {
    render(<AccessibleName />);
    const submitButton = screen.getByRole('button', {
      name: /submit/i
    });
    const cancelButton = screen.getByRole('button', {
      name: /cancel/i
    });
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  //3 find by id and name
  function MoreNames() {
    return (
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" />
  
        <label htmlFor="search">Search</label>
        <input id="search" />
      </div>
    );
  }
  render(<MoreNames />);

  test('shows an email and search input', () => {
    render(<MoreNames />);
    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const searchInput = screen.getByRole('textbox', {
      name: /search/i
    });
    expect(emailInput).toBeInTheDocument();
     expect(searchInput).toBeInTheDocument();
  });


  //4 - find icon btns by label
  function IconButtons() {
    return (
      <div>
        <button aria-label="sign in">
          <svg />
        </button>
  
        <button aria-label="sign out">
          <svg />
        </button>
      </div>
    );
  }
  render(<IconButtons/>);
  test('find elements based on label', () => {
    render(<IconButtons />);
    const signInBtn = screen.getByRole('button',{
      name: /sign in/i
 });
    const signOutBtn = screen.getByRole('button',{
      name: /sign out/i
});
    expect(signInBtn).toBeInTheDocument();
    expect(signOutBtn).toBeInTheDocument();
});