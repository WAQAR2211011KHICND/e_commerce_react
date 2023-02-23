import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('displays the logo image', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png');
  });

  it('displays the app name', () => {
    render(<Header />);
    const appName = screen.getByText('ALI SHOPPING');
    expect(appName).toBeInTheDocument();
    expect(appName.tagName).toEqual('H4');
    expect(appName).toHaveStyle({ color: '#7C6354' });
  });

});
