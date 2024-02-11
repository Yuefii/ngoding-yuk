import create from 'zustand';

interface Codes {
  code1: string
  code2: string
  code3: string
  code4: string
}

interface HTMLCodeState {
  codes: Codes;
  setCode: (codeName: keyof Codes, newCode: string) => void;
}

const useHTMLCodeStore = create<HTMLCodeState>(set => ({
  codes: {
    code1: `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
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
  },
  setCode: (codeName: keyof Codes, newCode: string) => set((state) => ({
    codes: {
      ...state.codes,
      [codeName]: newCode,
    },
  })),
}));

export default useHTMLCodeStore;
