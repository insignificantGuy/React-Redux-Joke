import HeadLines from './components/Button/button.component';
import InputBlock from './components/Input/input.component';
import SignIn from './components/SignIn/signIn.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeadLines/>
      <br/>
      <InputBlock/>
      <br/>
      <SignIn/>
    </div>
  );
}

<script src="https://apis.google.com/js/platform.js" async defer></script>

export default App;
