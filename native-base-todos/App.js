import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Custom
import { MyComponent } from 'components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyComponent />
      </View>
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
