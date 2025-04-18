
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Hackblocks from './pages/hackblocks';
import Carnival from './pages/carnival';
import PixelToPitch from './pages/pixelToPitch';
import Uxelerate from './pages/uxelerate'
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import FacultyMentor from './components/FacultyMentor'
import ChairPerson from './components/ChairPerson'
import Heads from './components/Heads'
import {EventsPage} from "./pages/EventsPage";
import Contact from "./pages/Contact";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path='/events/hackblocks' element={<Hackblocks/>}/>
          <Route path='/events/carnival' element={<Carnival/>}/>
          <Route path='/events/p2p' element={<PixelToPitch/>}/>
          <Route path='/events/uxelerate' element={<Uxelerate/>}/>
          <Route path="/community" element={<Community />} />
          <Route path="/community/faculty-mentor" element={<FacultyMentor />} />
          <Route path="/community/chair-person" element={<ChairPerson />} />
          <Route path="/community/heads" element={<Heads />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;