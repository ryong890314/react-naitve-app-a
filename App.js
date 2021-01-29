import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.statusbar}>
           <StatusBar style="dark" />
        </View>
        <View style={styles.browserContainer}>
          <WebView
          useWebKit = { true }
          source={{ uri: 'https://ryong890314.github.io/app-rp/index.html' }}
          style={{ marginTop: 0 }}
         />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
  },
  statusbar: {
      flex: 0,
  },
  browserContainer: {
      flex: 2,
  }
});
