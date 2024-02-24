import create from 'zustand';

interface Codes {
  code1: string
  code2: string
  code3: string
  code4: string
  code5: string
  code6: string
  code7: string
  code8: string
  code9: string
  code10: string
  code11: string
  code12: string
  code13: string
}

interface HTMLCodeState {
  codes: Codes;
  setCode: (codeName: keyof Codes, newCode: string) => void;
}

const useHTMLCodeStore = create<HTMLCodeState>(set => ({
  codes: {
    // ARTICLE BELAJAR STRUKTUR DASAR HTML UNTUK PEMULA
    code1: `
<!DOCTYPE html>
  <html lang="id">
  <head>
    <title>Mari Kita Belajar HTML | NgodingYuk</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
  </html>
    `,

    code2: `
<body>
  <h1>Judul Utama</h1>
  <p>Ini adalah paragraf pertama.</p>
  <p>Ini adalah paragraf kedua.</p>
</body>
    `,

    code3: `
<body>
  <a href="https://www.contohlink.com">Klik di sini</a> untuk menuju ke situs lain.
  <img src="gambar.jpg" alt="Deskripsi gambar">
</body>
    `,

    code4: `
<body>
  <ul>
    <li>Item pertama</li>
    <li>Item kedua</li>
  </ul>
  <ol>
    <li>Item pertama</li>
    <li>Item kedua</li>
  </ol>
</body>
    `,

    // ARTICLE BELAJAR MEMBUAT FORM, TABEL, DAN SEMANTIC HTML
    code5: `
<body>
  <form action="/proses-form" method="post">
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" required>
        
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8" required>

    <label for="gender">Jenis Kelamin:</label>
    <select id="gender" name="gender">
        <option value="male">Laki-laki</option>
        <option value="female">Perempuan</option>
    </select>

    <input type="submit" value="Kirim">
  </form>
</body>
    `,
    code6: `
<body>
  <table>
    <thead>
      <tr>
        <th>Nama</th>
        <th>Usia</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
</body>
    `,
    code7: `
<body>
  <article>
    <h2>Judul Artikel</h2>
    <p>Isi artikel...</p>
  </article>

  <aside>
    <h3>Info Samping</h3>
    <p>Informasi tambahan...</p>
  </aside>

  <footer>
    <p>Hak Cipta © 2024 Nama Anda.</p>
  </footer>
</body>
    `,

    // BELAJAR MEMBUAT HEADER, FOOTER, AUDIO, VIDEO DAN HTML LANJUTAN
    code8: `
<body>
  <header>
    <h1>Selamat Datang</h1>
    <ul>
      <li>Beranda</li>
      <li>Tentang Kami</li>
      <li>Kontak</li>
    </ul>
  </header>
  
  <footer>
    <p>Hak Cipta © 2024 Nama Anda.</p>
  </footer>
</body>
    `,
    code9: `
<body>
  <audio controls>
    <source src="audio.mp3" type="audio/mp3">
  </audio>

  <video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
    `,
    code10: `
<body>   
  <details>
    <summary>Klik untuk informasi lebih lanjut</summary>
    <p>Isi informasi tambahan...</p>
  </details>
</body>
    `,
    code11: `
<body> 
  <article>
    <h2>Judul Artikel</h2>
    <p>Isi artikel...</p>
  </article>

  <aside>
    <h3>Artikel Terkait</h3>
    <ul>
      <li><a href="#">Artikel 1</a></li>
      <li><a href="#">Artikel 2</a></li>
    </ul>
  </aside>
</body>
    `,
    code12: `
<body>
  <article>
    <h2>Judul Artikel</h2>
    <img src="artikel.jpg" alt="Ilustrasi Artikel">
    <p>Isi artikel...</p>
  </article>
</body>
    `,
    code13: `
<head>
    <meta name="description" content="Deskripsi halaman web Anda">
    <meta name="keywords" content="kata kunci, SEO, web">
    <meta name="author" content="Nama Anda">
</head>
    `,
  },
  setCode: (codeName: keyof Codes, newCode: string) => set((state) => ({
    codes: {
      ...state.codes,
      [codeName]: newCode,
    },
  })),
}));

export default useHTMLCodeStore;
