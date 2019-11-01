Kita bisa memodifikasi props yang kita gunakan untuk mengakses properti dari parent. Jika sebelumnya kita mengakses properti dengan menggunakan kata kunci "props", misalnya saja ` {props.imageSource}``. kita bisa membuatnya menjadi `{imageSource}``` saja dengan cara seperti berikut

### ImageScreen.js

```javascript
<View>
  <ImageDetail
    title="Forest"
    imageSource={require('../../assets/forest.jpg')}
    score={9}
  />
  <ImageDetail
    title="Beach"
    imageSource={require('../../assets/beach.jpg')}
    score={7}
  />
  <ImageDetail
    title="Mountain"
    imageSource={require('../../assets/mountain.jpg')}
    score={4}
  />
</View>
```

### ImageDetail.js

```javascript
const ImageDetailScreen = ({imageSource, title, score}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};
```

jadi kita mendefinisikan properti yang ingin diambil menjadi satu props kemudian tinggal kita panggil menggunakan nama propertinya saja tanpa menggunakan "props"
