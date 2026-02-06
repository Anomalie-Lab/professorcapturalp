import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import TargetAudience from './components/TargetAudience';
import Instructor from './components/Instructor';
import LearningOutcomes from './components/LearningOutcomes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Hero />
      <Problem />
      <Solution />
      <TargetAudience />
      <Instructor />
      <LearningOutcomes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
