import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("the initial input box is empty", ()=>{
  render(<App/>);
  const tempToConvertInput = screen.getByRole('textbox');
  // there is no role called password
  expect(tempToConvertInput.value).toBe('');
});

test("that the user can type an email", () => {
  render(<App/>);
  const tempToConvertInput = screen.getByRole('textbox');
  userEvent.type(tempToConvertInput, '23');
  expect(tempToConvertInput.value).toBe('23');
});
