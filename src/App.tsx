import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';

import { StyledPageWrapper } from './components/StyledPageWrapper';
import { StyledContainer } from './components/StyledContainer.tsx';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { Home } from './components/mains/Home';
import { Education } from './components/mains/Education';
import { Experiences } from './components/mains/Experiences';
import { Certifications } from "./components/mains/Certifications.tsx";
import { Achievements } from "./components/mains/Achievements.tsx";
import { Projects } from './components/mains/Projects';



function Root () {
  return (
      <>
        <StyledPageWrapper>
            <Header/>

            <StyledContainer>
                <Navigation/>
                <Routes>
                  <Route path={`/`} element={<Home/>} />
                  <Route path={`/Education`} element={<Education/>} />
                  <Route path={`/Experiences`} element={<Experiences/>} />
                  <Route path={`/Certifications`} element={<Certifications/>} />
                  <Route path={`/Achievements`} element={<Achievements/>} />
                  <Route path={`/Projects`} element={<Projects/>} />
                </Routes>
            </StyledContainer>

            <Footer/>
        </StyledPageWrapper>
      </>
  );
}

const router = createBrowserRouter(
    [
      {path:"*", Component: Root},
    ]
);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}

