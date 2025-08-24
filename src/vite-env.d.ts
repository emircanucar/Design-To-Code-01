/// <reference types="vite/client" />

// CSS modülleri için type declaration
declare module '*.css' {
  const content: any;
  export default content;
}

// @fontsource paketleri için type declaration
declare module '@fontsource/*';

// Swiper CSS dosyaları için type declaration
declare module 'swiper/css';
declare module 'swiper/css/bundle';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
