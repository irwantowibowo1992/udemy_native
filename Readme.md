## Menampilkan Data Color Dengan FlatList

Tambahkan kode berikut setelah view randomColor

```javascript
<FlatList
  keyExtractor={item => item}
  data={colors}
  renderItem={({item}) => {
    return <View style={{height: 100, width: 100, backgroundColor: item}} />;
  }}
/>
```

kode tersebut akan menampilkan setiap list yang ditambahkan
