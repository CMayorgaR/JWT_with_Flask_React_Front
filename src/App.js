import './App.css';
import injectContext from './Store/appContext';
import SignUp from './Components/SingUp';

function App() {
  return (
    <>
    <SignUp />
    </>
  );
}

export default injectContext(App);
