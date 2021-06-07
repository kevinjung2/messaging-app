import React from 'react'
import ConversationContainer from './containers/ConversationContainer'
import Conversations from './containers/Conversations'
// import FriendsContainer from './containers/FriendsContainer'

function App() {
  return (
    <div className="App">
      <ConversationContainer />
      <Conversations />
    </div>
  );
}

export default App;
