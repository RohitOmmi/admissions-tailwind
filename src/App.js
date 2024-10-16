
import './App.css';
import AppHeader from './components/common/header';
import About from './components/about';
import Instructions from './components/instructions';
import ImportantDates from './components/ImportantDates';
import Feestructure from './components/Feestructure';
import Examinstructions from './components/Examinstructions';
import Scholarship from './components/Scholarship';
import Subscholarship from './components/Subscholarship';
import Discipline from './components/Discipline';
import Faq from './components/Faq';
import AppFooter from './components/common/footer';

function App() {
  return (
   <>
   <AppHeader/>
   <About/>
   <Instructions/>
   <ImportantDates/>
   <Feestructure/>
   <Examinstructions/>
   <Scholarship/>
   <Subscholarship/>
   <Discipline/>
   <Faq/>
   <AppFooter/>
   </>
  );
}

export default App;
