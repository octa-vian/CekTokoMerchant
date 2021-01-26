import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppNavigator from './Src/AppNavigator';

const App: () => React$Node = () => {
  return (
    <View style={styles.page}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default App;
