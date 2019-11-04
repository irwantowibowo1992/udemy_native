### Membuat validasi state reusable adjust color yang telah dibuat

jadi ceritanya adalah kita akan memberika sebuah validasi dimana jika state yang dibuat jika increase lebih dari 255 dan decrease kurang dari 0 maka opersinya akan berakhir disitu dalam arti tidak akan merubah warna lagi. Maksudnya adalah jika posisi increase di angka 255 dan button increase ditekan lagi maka akan kembali atau akan mengembalikan di angka 255. Begitu juga dengan 0, jika tombol decrease ditekan maka akan mengembaikan nilai 0.

Kita bisa memodifikasi component ColorCounter di SquareScreen dengan menambahkan if :

```javascript
<ColorCounter
  onIncrease={() => {
    if (red + COLOR_INCREMENT > 255) {
      return;
    }
    setRed(red + COLOR_INCREMENT);
  }}
  onDecrease={() => setRed(red - COLOR_INCREMENT)}
  color="Red"
/>
```

sebenarnya kode ini sudah berjalan, namun jika kita perhatikan kode tersebut kurang efektif karena kita perlu malakukan penulisan kode validasi di setiap button baik increase maupun decrease.

Dan solusi yang lebih baik adalah kita membuat function helper untuk menaruh logic tersebut kemudian kita panggil function tadi di component yang membutuhkannya.

```javascript
const setColor = (color, changeNumberColor) => {
  if (color == 'red') {
    if (red + changeNumberColor > 255 || red + changeNumberColor < 0) {
      return;
    } else {
      setRed(red + changeNumberColor);
    }
  }
};
```

Lalu panggil functionnya

```javascript
<ColorCounter
  onIncrease={() => setColor('red', COLOR_INCREMENT)}
  onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
  color="Red"
/>
```
