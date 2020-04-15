# react-native-redux
Learning Redux

In App.js we create store using CreateStore()

CreateStore takes first parameter as reducer

Above which we create a function named reducer

Above which we create initialState and pass in the required state

Now reducer function takes two parameters, 1.state=initialState 2.action

Also we wrap anything with <Provider></Provider> where state is required
and pass "store" to it i.e. <Provider store={store}></Provider>

Now in src/CounterApp.js we use connect function to map state and actions to props

action dispatches action type

In App.js reducer detects action.type and with switch case the state is modified.

![Final Result](https://raw.githubusercontent.com/shubhamchepe/react-native-redux/master/src/Screenshot_1586899346.png)


