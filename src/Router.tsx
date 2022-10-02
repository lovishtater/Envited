import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./views/LandingPage/landingPage";
import CreateEvent from "./views/CreateEvents/createEvent";
import EventPage from "./views/Event/eventPage";

function Router() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/create' element={<CreateEvent />} />
          <Route path='/event' element={<EventPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
