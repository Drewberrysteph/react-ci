import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn ci/i);
  expect(linkElement).toBeInTheDocument();
});


test('display counter', () => {
  render(<App />);
  const btnIncrement = screen.getByRole('button', { name: "Increment" })
  const btnDeccrement = screen.getByRole('button', { name: "Decrement" })

  expect(btnIncrement).toBeInTheDocument();
  expect(btnDeccrement).toBeInTheDocument();

  fireEvent.click(btnIncrement)
  expect(screen.getByRole('heading', { name: "Counter: 1" })).toBeInTheDocument();

  fireEvent.click(btnDeccrement)
  fireEvent.click(btnDeccrement)
  fireEvent.click(btnDeccrement)
  expect(screen.getByRole('heading', { name: "Counter: -2" })).toBeInTheDocument();
});
