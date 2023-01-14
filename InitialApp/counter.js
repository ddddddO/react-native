import { useState } from 'react';
import { Button, Text, View, Alert } from 'react-native';

export function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter</Text>
      <Button
        title='Up'
        onPress={() => Alert.alert('Up up!')}
      />
      
    </View>
  );
}
