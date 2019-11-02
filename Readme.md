## Action State Increase Decrease

1. Buat Button untu Increase dan Decrease

```javascript
    <Button title="Increase" />
    <Button title="Decrease" />
```

2. Buat variabel dan set angka awal dengan 0
   `let counter = 0;`

3. Ubah button nya seperti kode berikut

```javascript
    <Button
        title="Increase"
        onPress={() => {
            counter++;
            console.log(counter);
        }}
        />
        <Button
        title="Decrease"
        onPress={() => {
            counter--;
            console.log(counter);
        }}
    />
```

Sejauh ini jika kita tekan button increase ataupun decrease maka di console sudah berjalan, namun untuk tampilannya belum jalan. mari kita modifikasi supaya hasilnya bisa ditampilkan di layar

4. Import useState dari react
   `import React, {useState} from 'react';`
   `useState` ini adalah Hooks. `useState` di panggil dalam function component untuk menambahkan suatu state lokal dimana `useState` memberikan dua nilai yaitu nilai state saat ini dan fungsi untuk memperbaharui nilai tersebut ( `const [counter, setCounter] = useState(0);` ). Bagian `useState(0)` artinya adalah kita memberikan nilai awal yaitu 0.

5. Kemudian ubah kode buttonnya dengan mengganti nilai counter++ dan counter-- dengan funsi `setCounter` nya.

```javascript
<View>
  <Button
    title="Increase"
    onPress={() => {
      setCounter(counter + 1);
    }}
  />
  <Button
    title="Decrease"
    onPress={() => {
      setCounter(counter - 1);
    }}
  />
  <Text>Current Count: {counter} </Text>
</View>
```

Jadi setiap button baik itu Increase maupun Decrease ditekan makan nilai counter akan berubah dan component akan ter-render ulang.
