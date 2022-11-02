import { render, screen } from '@testing-library/react';
import ServersPage from '../Servers/index';
import { BrowserRouter } from "react-router-dom";

test('Test Servers page', function() {
   render(
       <BrowserRouter>
         <ServersPage/>
       </BrowserRouter>);
   expect(screen.getByText('Servers page')).toBeInTheDocument();
});