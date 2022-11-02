import { screen, render } from '@testing-library/react';
import About from '../About';

test('Check About component ', function () {
    render(<About></About>);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
});

test('Check Settings not in component ', function () {
    render(<About/>);
    expect(screen.queryByText(/settings page/i)).not.toBeInTheDocument();
});