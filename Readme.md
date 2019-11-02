## Menampilkan List Colors Yang Telah Dibuat

Mari kita tampilkan color yang talah dibuat/ditambahkan dengan menggunkana FlatList.

Tambahkan kode berikut di di bawah list random color.

```javascript
<FlatList
  keyExtractor={item => item}
  data={colors}
  renderItem={({item}) => {
    return <View style={{height: 100, width: 100, backgroundColor: item}} />;
  }}
/>
```
<<<<<<< Updated upstream

`...colors` berfungsi untuk meng-copy isi data yang ada di variabel `const[colors, setColors]` yang mana setiap button add color ditekan maka nilai `colors` akan bertambah datanya dan akan dicopy oleh `...colors` tersebut. Jika kita console maka data array color akan selalu bertambah setiap button add color kita tekan
=======
>>>>>>> Stashed changes
