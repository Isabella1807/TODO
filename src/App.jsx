import './index.css'
import ButtonBase from './components/Atoms/ButtonBase/ButtonBase.jsx';
import TextInput from "./components/Atoms/TextInput/TextInput.jsx";
import InputForm from "./components/Molecules/InputForm/InputForm.jsx";

function App() {

  return (
      <div>
        <h1>Isa womp womp</h1>
          <InputForm placeholder='Navn' label='Indstast navn'/>
          <InputForm placeholder='Navn' label='Indstast navn'/>
          <ButtonBase buttonText='Save'/>
      </div>
  )
}

export default App
