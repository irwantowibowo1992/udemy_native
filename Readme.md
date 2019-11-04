## Menangani State Reusable Color Adjuster

<img src="https://riws2a.bn.files.1drv.com/y4meQcSqDEdqE25YzA0mL4FY6V8-d6nOI9BMJQqSGc42jisjnxBN-MKnmZRYbA5HG0jjaMOceb5VElvX6XKWZjxfrvfWOg1NysXXkWvqNhauiqtRhimiQ-xFkOUVpdpLu3yodgVaug3u61s6Q2L9H-stLVDUaVLSSjvuK6CN2zNbWn1U5y1KfXrQBk4-J7uSnNNbHmTGqRvz70nEEy-d00qnA?width=721&height=409&cropmode=none" width="721" height="409" />

Pada gambar diatas bisa kita perhatikan bahwa state dibaca / dibuat di screen SquareScreen. Dan untuk mengubahnya kita bisa ubah di screen ColorCounter.

Oke mari aplikasikan,

1. Di Screen SquareScreen kita tambahkan properti onIncrease dan onDecrease

```javascript
import React, {useState} from 'react';

.............................................

const [red, setRed] = useState(0);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);

<ColorCounter
  onIncrease={() => setRed(red + 1)}
  onDecrease={() => setRed(red - 1)}
  color="Red"
/>
<ColorCounter
  color="Green"
  onIncrease={() => setGreen(green + 1)}
  onDecrease={() => setGreen(green - 1)}
/>
<ColorCounter
  color="Blue"
  onIncrease={() => setBlue(blue + 1)}
  onDecrease={() => setBlue(blue - 1)}
/>

<View
  style={{
    height: 150,
    width: 150,
    backgroundColor: `rgb(${red},${green},${blue})`,
  }}
/>
```

saat pertama di render maka warnanya akan hitam, kenapa? karena kita mendefinisikan nilai awal rgb nya semuanya 0,
`const [red, setRed] = useState(0); const [green, setGreen] = useState(0); const [blue, setBlue] = useState(0);`

Kemudian pada masing-masing component ColorCounter baik red, green, maupun blue kita beri properti onIncrease dan onDecrease yang akan memanggil seColor berdasarkan color masing-masing pada constanta awal yang ditentukan.

Barulah di screen ColorCounter kita ambil propertinya,

```javascript
const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
```

Ketika tombol Increase warnanya diteka maka akan menambahkan warna sesuai dengan properti yang di berika, jika red maka akan menambahkan color red, dan seterusnya.
Begitupun sebaliknya ya untuk Decrease.

Dan perlu dicatat juga untuk increase ini akan menambahkan angkanya 1 akibat dari pendefinisian di SquareScreen ( misal => setRed(red + 1) ). Tentunya akan melelahkan karena kita harus tekan terus butonnya supaya warnanya menjadi merah.

Maka dari itu kita bisa modifikasi dengan menambahkan variabel yang isinya jika dipencet akan menmbahkan angka warnanya sesuai dengan yang kita definisikan, contohnya seperti ini :

Kita buat variabelnya

```javascript
const COLOR_INCREMENT = 15;
```

Kemudian tinggal kita apply ada di properti onIncrease dan onDecrease pada masing masing component :

```javascript
<ColorCounter
  onIncrease={() => setRed(red + COLOR_INCREMENT)}
  onDecrease={() => setRed(red - COLOR_INCREMENT)}
  color="Red"
/>
```

jadi setiap button ditekan maka akan menambah atau mengurangi angka warnanya dengan 15, gitu
