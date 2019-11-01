Kita dapat mengambil suatu data yang dikirimkan dari parent dengan menggunakan "props". Contohnya adalah seperti berikut

### ImageScreen.js

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

###ImageDetail.js

```javascript
const ImageDetailScreen = props => {
  console.log(props);

  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
```
