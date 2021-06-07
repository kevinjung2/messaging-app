import React from 'react'
import './css/App.css'
import ConversationContainer from './containers/ConversationContainer'
import Conversations from './containers/Conversations'
import FriendsContainer from './containers/FriendsContainer'

function App(props) {


  return (
    <div className="App">
      <Conversations />
      <ConversationContainer />
      <FriendsContainer />
    </div>
  );
}


export default App;
