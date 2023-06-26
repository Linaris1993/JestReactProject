import { useState, useEffect } from 'react';

function fakeFetchColors() {
  return Promise.resolve(
    ['red', 'green', 'bleu']
  );
}

function LoadableColorList() {
  const [colors, setColors] = useState( [] );

  useEffect(() => {
    fakeFetchColors()
    .then(c => setColors(c));
  }, []);

  const renderColors = colors.map(color => {
    return <li key={color}>{color}</li>
  });

  return<ul>{renderColors}</ul>
}

render(< LoadableColorList />);

test('Favor findBy or findBy when data fetching', async() => {

    render(< LoadableColorList />);
    
    const els = await screen.findAllByRole('listitem');
    expect(els).toHaveLength(3);
});