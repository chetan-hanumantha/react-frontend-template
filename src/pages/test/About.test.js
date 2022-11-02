import { render, screen } from '@testing-library/react';
import AboutPage from '../About/index';
import SettingsPage from "../Settings/index";
import { MemoryRouter, Route, Routes} from "react-router-dom";

describe("About testing", function (){
    it('Test About page default route', function() {
        const { getByText, debug } = render(
            <MemoryRouter initialEntries={['/']} initialIndex={1}>
                <Routes>
                    <Route path='/' element={<AboutPage changeRoute={false}/>}></Route>
                    <Route path='/settings' element={<SettingsPage/>}></Route>
                </Routes>
            </MemoryRouter>
        );
        //debug();
        expect(getByText('About page')).toBeInTheDocument();
    });

    it('Test About page with route change', function() {
        const { getByText, debug } = render(
            <MemoryRouter initialEntries={['/']} initialIndex={1}>
                <Routes>
                    <Route path='/' element={<AboutPage changeRoute={true}/>}></Route>
                    <Route path='/settings' element={<SettingsPage/>}></Route>
                </Routes>
            </MemoryRouter>
        );
        //debug();
        expect(getByText('Settings page')).toBeInTheDocument();
    });
});