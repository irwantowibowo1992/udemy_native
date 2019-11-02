## Menambahkan Random Color

1. Import `useState`
   sudah dijelaskan di pembahasan sebelumnya jika `useState` ini adalah Hooks

2. Kemudian deklarasikan variabel untuk menampun data color dan setState colornya
   `const [colors, setColors] = useState([]);`

3. Kita modifikasi button add color dengan menambahkan function setColor di action onPress

```javascript
<Button
  title="Add Color"
  onPress={() => {
    setColors([...colors, randomRgb()]);
  }}
/>
```

`...colors` berfungsi untuk meng-copy isi data yang ada di variabel `const[colors, setColors]` yang mana setiap button add color ditekan maka nilai `colors` akan bertambah datanya dan akan dicopy oleh `...colors` tersebut. Jika kita console maka data array color akan selalu bertambah setiap button add color kita tekan
