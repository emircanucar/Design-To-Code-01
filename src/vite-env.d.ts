/// <reference types="vite/client" />

// CSS modülleri için type declaration
declare module '*.css' {
  const content: any;
  export default content;
}

// @fontsource paketleri için type declaration
declare module '@fontsource/*';
