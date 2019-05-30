import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import configureStore from './configureStore';


const store = configureStore();

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
