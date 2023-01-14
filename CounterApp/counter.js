import { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  }

  const handleDown = () => {
    setCount(count - 1);
  }

  const handleResult = () => {
    Alert.alert(`count: ${count}`);
  }

  return (
    <View>
      <Text>Counter App!</Text>
      <Text>{count}</Text>
      <Separator />
      <View style={styles.fixToText}>
        <Button title='Down' onPress={handleDown}/>
        <Button title='Up' onPress={handleUp}/>
      </View>
      <Separator />
      <Button title='Result' onPress={handleResult}/>
      <Separator />
      <Text>https://github.com/ddddddO/react-native/tree/main/CounterApp</Text>
    </View>
  )
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})