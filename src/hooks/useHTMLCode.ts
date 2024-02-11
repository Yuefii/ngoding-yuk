import create from 'zustand';

interface Codes {
  code1: string
  code2: string
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
    <title>Belajar HTML Dasar untuk Pemula</title>
  </head>
  <body>
    <p>Hello World from Code 1!</p>
  </body>
  </html>
    `,

    code2: `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Belajar HTML Dasar untuk Pemula</title>
  </head>
  <body>
    <p>Hello World from Code 1!</p>
  </body>
  </html>
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
