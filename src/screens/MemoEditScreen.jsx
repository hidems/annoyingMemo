import { StyleSheet, Text, TextInput, View } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="Shopping Lits" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});