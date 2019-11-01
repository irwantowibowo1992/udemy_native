Destructing Props di sini adalah kita akan menyederhanakan syntax kita dari `props.navigation.navigate` menjadi `navigation.navigate`.
Cara yang dapat kita lakukan adalah sebagai berikut:

```javascript
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Component"
      />

      <Button
        title="Got To Lists Demo"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};
```
