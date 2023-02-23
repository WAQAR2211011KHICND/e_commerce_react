import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductDetailBody } from './ProductDetailBody';

describe('Product Detail Component', () => {
 
  it('displays the app name', () => {
    render(<MemoryRouter><ProductDetailBody /></MemoryRouter>);
    const detailText = screen.getByText('Detail');
    expect(detailText).toBeInTheDocument();

  });

});
