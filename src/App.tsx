import Display from './components/Display';
import Calculator from './components/styles/Calculator';
import ButtonGroup from './components/ButtonGroup';
import ToggleButton from "./components/ToggleButton";

const App = () => {
  return (
    <>
      <Calculator>
        <div className='container-horizon'>
          <header>Interactive Calculator</header>
          <ToggleButton label="type" />
        </div>
        <Display />
        <ButtonGroup />
      </Calculator>
    </>
  );
}

export default App;
