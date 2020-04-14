import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CounterApp from './src/CounterApp';

const initialState = {
  counter: 0
}

const reducer = (state=initialState,action) => {
  switch(action.type)
  {
     case 'INCREASE_COUNTER':
       return{counter:state.counter+1}
     case 'DECREASE_COUNTER':
      return{counter:state.counter-1}
  }  
  return state
}

const store = createStore(reducer)
class App extends Component {

  render() {
    return(
      <Provider store={store}>
         <CounterApp/>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
