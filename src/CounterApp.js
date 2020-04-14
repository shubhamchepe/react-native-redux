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
import {connect} from 'react-redux';


class CounterApp extends Component {

  render() {
    return(
      <View style={styles.Container}>
        <View style={{flexDirection:'row',width:300,justifyContent:'space-around'}}> 
        <TouchableOpacity
         style={{
             backgroundColor:'#FFFFFF',
             width:100,
             borderRadius:20,
             height:35,
             justifyContent:'center',
             borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10
            }}
         onPress={() => this.props.decreaseCounter()}>
            <Text style={{fontSize:20,color:'#6F8DB6',textAlign:'center',fontWeight:'700'}}>Decrease</Text>
          </TouchableOpacity>
          <View style={{bottom:40}}>
    <Text style={{fontSize:25,fontWeight:'700'}}>{this.props.counter}</Text>
          </View>
          <TouchableOpacity 
           style={{
            backgroundColor:'#FFFFFF',
            width:100,
            borderRadius:20,
            height:35,
            justifyContent:'center',
            borderWidth: 1,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: -6, height: -6 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 10
           }}
          onPress={() => this.props.increaceCounter()}>
            <Text style={{fontSize:20,color:'#6F8DB6',textAlign:'center',fontWeight:'700'}}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#46BDFF'
  }
});

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increaceCounter: () => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
