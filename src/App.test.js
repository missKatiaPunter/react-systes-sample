import { render, screen } from '@testing-library/react';
import App from './App';

test("the initial input box is empty", ()=>{
  render(<App/>);
  const tempToConvertInput = screen.getByRole('textbox');
  // there is no role called password
  expect(tempToConvertInput.value).toBe('');
})
