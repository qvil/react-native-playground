import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Custom
import { MyComponent } from 'components';

export default class App extends React.Component {
  async componentWillMount() {
    console.warn(Expo);

    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
