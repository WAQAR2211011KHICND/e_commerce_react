import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { MemoryRouter } from 'react-router-dom';

const product = {
  name: 'Test Product',
  image: 'https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg',
  longDescription: 'This is a test product.',
  price: 94575,
};

describe('ProductCard', () => {
  it('renders product name and details correctly in list view', () => {
    render(<MemoryRouter><ProductCard type="list" product={product} /> </MemoryRouter>);
    const name = screen.getByRole('button', { name: /Test Product/i });
    const detail = screen.getByText(/this is a test product/i);
    const price = screen.getByText(/RS. 94,575/i);
    expect(name).toBeInTheDocument();
    expect(detail).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });


  it('updates quantity count correctly when input is changed', () => {
    render(<MemoryRouter><ProductCard type="detail" product={product} /></MemoryRouter>);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '3' } });
    expect(input.value).toBe('3');
  });
  
});
