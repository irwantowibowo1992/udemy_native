## Generate Random Color Action

1. Buat view untuk menampung color nya

```javascript
<View
  style={{
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0, 255, 0)',
  }}></View>
```

2. Buat function untuk generate random color nya

```javascript
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
```

3. Di view nomer 1 pada bagian backgroundColor kita letakkan function randomRgb kita dari yang semula `backgroundColor: 'rgb(0, 255, 0)'` menjadi `backgroundColor: randomRgb()`

function `randomRgb` ini akan menggenerate color secara random, jadi setiap kali dirender maka akan warna yang dihasilkan akan berbeda
