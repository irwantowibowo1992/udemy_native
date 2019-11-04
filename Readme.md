### Membuat Reusable State Update

Jika kode sebelumnya kita menggunakan if untuk menangani kondisi salah satu button nya, di sini juga masih terdapat sedikit ketidakefektifan yaitu kita harus menuliskan kode if lagi di button yang lainnya. Nah kita bisa merefactor kode if tersebut dengan menggunakan "switch".

```javascript
const setColor = (color, changeNumberColor) => {
  switch (color) {
    case 'red':
      red + changeNumberColor > 255 || red + changeNumberColor < 0
        ? null
        : setRed(red + changeNumberColor);
      return;

    case 'green':
      green + changeNumberColor > 255 || green + changeNumberColor < 0
        ? null
        : setGreen(green + changeNumberColor);
      return;

    case 'blue':
      blue + changeNumberColor > 255 || blue + changeNumberColor < 0
        ? null
        : setBlue(blue + changeNumberColor);
      return;
    default:
      return;
  }
};
```

Lalu kita panggil function setColor nya

```javascript
  <ColorCounter
    onIncrease={() => setColor('red', COLOR_INCREMENT)}
    onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
    color="Red"
  />
  <ColorCounter
    onIncrease={() => setColor('green', COLOR_INCREMENT)}
    onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
    color="Red"
  />
  <ColorCounter
    onIncrease={() => setColor('blue', COLOR_INCREMENT)}
    onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
    color="Red"
  />
```
