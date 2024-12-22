

import Maincomponent from './components/Maincomponent';
import LoginContextProvider from './context/LoginContextProvider';
import Useeffect from './components/Useeffect'
import Usestate from './components/Usestate'

import Useref from "./components/Useref";
import Usereducer from './components/Usereducer';
import Uselayout from './components/Uselayout';

function App() {

  return (
    <>

      <Usestate />
      <Useeffect />

      <LoginContextProvider>
        <Maincomponent />
      </LoginContextProvider>
      <Useref />
      <Usereducer />
      <Uselayout />
    </>
  );
}

export default App;
