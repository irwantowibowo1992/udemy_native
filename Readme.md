Maksud dari parent-child relationship ini adalah kita menghubungkan screen menggunakan import.

```javascript
import ImageDetail from '../component/ImageDetail';

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};
```
