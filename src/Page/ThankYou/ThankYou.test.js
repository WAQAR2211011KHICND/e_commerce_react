import { createMemoryHistory } from '@remix-run/router';
import { render ,fireEvent,  screen} from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { ThankYou } from './ThankYou';
// import { createMemoryHistory } from 'history';

describe('ThankYou component', () => {
  it('displays "Thanks For Your Order" message', () => {
    render(<MemoryRouter><ThankYou /></MemoryRouter>);
    expect(screen.getByText('Thanks For Your Order')).toBeInTheDocument();
  });

  it('should have the start over button', ()=>{
    render(<MemoryRouter><ThankYou /></MemoryRouter>);
    expect(screen.getByText('Start Over')).toBeInTheDocument();
  })


it('calls fetch and redirects to home page when Start Over button is clicked', async () => {
    const mockResponse = { status: 200 };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
      status: 200
    });
    const history = createMemoryHistory();
    render(
      <MemoryRouter  history={history}>
        <ThankYou />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Start Over' }));
    await screen.findByText('Thanks For Your Order'); // Wait for the component to re-render after the fetch call
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8081/shopping_cart/delete_all', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    },{"mode": "cors"});
    expect(screen.getByText('Thanks For Your Order')).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/'); // Test that the redirect happened
    global.fetch.mockRestore();
  });

  

});