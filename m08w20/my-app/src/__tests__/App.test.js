import { screen, render, fireEvent } from '@testing-library/react'
import App from '../components/App';

describe('App component', () => {
  it('renders app properly', () => {
    render(<App />);
  })
  
  it('renders app with waiting message', () => {
    render(<App />);
    expect(screen.getByText('Waiting for your choice!')).toBeInTheDocument();
  })
  
  it('shows win message after winning against computer', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('Moai'));
    expect(screen.getByText('You win!!')).toBeInTheDocument();
  })
  
  it('shows lost message after losing against computer', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('Tree'));
    expect(screen.getByText('Too bad! Better luck next time.')).toBeInTheDocument();
  })
  
  it('shows tied message after selecting same option as computer', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('Axe'));
    expect(screen.getByText('Tie game')).toBeInTheDocument();
  })
})
