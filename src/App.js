import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CaceContainer from './components/CaceContainer';
// import HockCakeContainer from './components/HockCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import AppleContainer from './components/AppleContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <CaceContainer />
        <IceCreamContainer />
        <AppleContainer />
        <NewCakeContainer />
        <UserContainer>x`</UserContainer>
    </div>
    </Provider>
  );
}

export default App;
