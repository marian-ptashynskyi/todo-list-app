import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducers/mainReducer';
import thunk from 'redux-thunk';


const store = configureStore();

function configureStore(initialState) {
    return createStore(
        mainReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
