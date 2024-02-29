import logo from './logo.svg';
import './App.css';
import HOC from './Component/counter';
import EnhancedLikes from './Component/likeCounter';
import EnhancedComment from './Component/Comments';
import Greeting from './Component/Proptypechecking';
import Refinclass from './Component/Refinclass';



function App() {
  return (
    <div className="App">
      {/* <HOC/> */}
      <EnhancedComment/>
      <EnhancedLikes/>
      <Greeting name= '1'/>
      <Refinclass/>
 
    </div>
  );
}

export default App;
