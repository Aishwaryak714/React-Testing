import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <input type="text" placeholder='Enter Name Here' name='username' id='userID'/>
      <br/>
      <br/>
      <br/>
      <img title="imageTest"
       src='https://media.istockphoto.com/id/1477040247/photo/handshake-meeting-and-business-people-partnership-for-b2b-collaboration-onboarding-welcome-or.jpg?s=1024x1024&w=is&k=20&c=yTGH_eF2WJBX48NlksS5rJuR9pW5ZX6-yWwGu-mdR7w='/>
      <Form/>
    </div>
  );
}

export default App;
