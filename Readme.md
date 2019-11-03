## Membuat Reusable Color Adjuster

1. Buat screen baru, misal kita beri nama ColorCounter kemudian kita berin kode untuk button increase dan decrease

2. Pada screen SquareScreen kita import ColorCounter dan kita munculkan buttonnya, kurang lebih kodenya seperti berikut

```javascript
import ColorCounter from '../component/ColorCounter';

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter />
      <ColorCounter />
      <ColorCounter />
    </View>
  );
};
```

3. Pada component ColorCounter kita bikin properti untuk menampilkan warnanya,

```javascript
const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};
```

4. Kemudian kita tangkap properti dari component ColorCounter dengan props,

```javascript
const ColorCounter = ({color}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};
```
