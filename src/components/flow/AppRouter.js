import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './../Portfolio';
// import Projects from './projects/Projects';
import SingleProject from './../projects/SingleProject';

const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<Portfolio />} />
                <Route path='/projects' exact element={<SingleProject />} />
            </Routes>
        </>
    );
}

export default AppRouter;