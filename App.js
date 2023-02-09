import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <View style={styles.AndroidSafeArea}>
      {/* <HomeScreen /> */}
      <NewPostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});