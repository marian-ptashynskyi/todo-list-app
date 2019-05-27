import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './reducers/mainReducer';


const store = createStore(mainReducer);

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
