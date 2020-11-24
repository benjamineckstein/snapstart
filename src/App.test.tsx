import React from 'react';
import ReactDOM from 'react-dom';
import {render, RenderResult} from '@testing-library/react';
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders choose a game mode', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/choose a game mode/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders choose a game mode', () => {
  const result: RenderResult = render(<App />);
  const linkElement = result.getByText(/choose a game mode/i);
  expect(linkElement).toBeInTheDocument();
});

