# React Proje Yapısı Rehberi

## İçindekiler

1. [Genel Prensipler](#genel-prensipler)
2. [Küçük Projeler için Yapı](#küçük-projeler-için-yapı)
3. [Orta Ölçekli Projeler için Yapı](#orta-ölçekli-projeler-için-yapı)
4. [Büyük Projeler için Yapı](#büyük-projeler-için-yapı)
5. [Dosya ve Klasör İsimlendirme Kuralları](#dosya-ve-klasör-isimlendirme-kuralları)
6. [Best Practices](#best-practices)
7. [Örnekler](#örnekler)

## Genel Prensipler

### 1. Modülerlik

- Her bileşen kendi dosyasında olmalı
- İlgili dosyalar aynı klasörde gruplandırılmalı
- Yeniden kullanılabilir bileşenler ayrı tutulmalı

### 2. Ölçeklenebilirlik

- Proje büyüdükçe yapının karmaşıklaşmaması
- Yeni özellikler kolayca eklenebilmeli
- Kod tekrarından kaçınılmalı

### 3. Anlaşılabilirlik

- Klasör ve dosya isimleri açık ve anlaşılır olmalı
- Tutarlı isimlendirme kuralları kullanılmalı
- Kod organizasyonu mantıklı olmalı

## Küçük Projeler için Yapı

Küçük projeler (< 10 bileşen, tek geliştirici) için basit ama düzenli bir yapı:

```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Button.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useLocalStorage.ts
├── utils/
│   ├── helpers.ts
│   └── constants.ts
├── styles/
│   ├── global.css
│   └── components.css
├── assets/
│   ├── images/
│   └── icons/
├── App.tsx
├── main.tsx
└── index.css
```

### Küçük Proje Özellikleri:

- **Basit klasör yapısı**: Az sayıda ana klasör
- **Düz hiyerarşi**: Çok fazla alt klasör yok
- **Hızlı geliştirme**: Dosyaları bulmak kolay
- **Minimal konfigürasyon**: Karmaşık araçlar gerektirmez

## Orta Ölçekli Projeler için Yapı

Orta ölçekli projeler (10-50 bileşen, 2-5 geliştirici) için daha organize yapı:

```
src/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── index.ts
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   └── Layout/
│   └── features/
│       ├── auth/
│       │   ├── LoginForm/
│       │   ├── SignupForm/
│       │   └── UserProfile/
│       ├── dashboard/
│       └── products/
├── pages/
│   ├── HomePage/
│   ├── DashboardPage/
│   └── ProductsPage/
├── hooks/
│   ├── common/
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   ├── auth/
│   │   └── useAuth.ts
│   └── api/
│       └── useProducts.ts
├── services/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── products.ts
│   │   └── users.ts
│   └── storage/
│       └── localStorage.ts
├── utils/
│   ├── helpers/
│   ├── constants/
│   └── validators/
├── types/
│   ├── auth.ts
│   ├── products.ts
│   └── common.ts
├── store/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── productsSlice.ts
│   └── index.ts
├── styles/
│   ├── globals.css
│   ├── components/
│   └── pages/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Büyük Projeler için Yapı

Büyük projeler (50+ bileşen, 5+ geliştirici) için enterprise seviye yapı:

```
src/
├── app/
│   ├── store/
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── middleware.ts
│   ├── router/
│   │   ├── index.tsx
│   │   ├── routes.tsx
│   │   └── guards/
│   └── providers/
│       ├── ThemeProvider.tsx
│       ├── AuthProvider.tsx
│       └── QueryProvider.tsx
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   │   ├── SignupForm/
│   │   │   └── PasswordReset/
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   └── useLogin.ts
│   │   ├── services/
│   │   │   └── authService.ts
│   │   ├── store/
│   │   │   ├── authSlice.ts
│   │   │   └── authSelectors.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   ├── utils/
│   │   │   └── authHelpers.ts
│   │   └── index.ts
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   └── types/
│   ├── user-management/
│   └── analytics/
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Table/
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── AppLayout/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   └── Footer/
│   │   └── forms/
│   │       ├── FormField/
│   │       ├── FormGroup/
│   │       └── ValidationMessage/
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useApi.ts
│   │   └── usePermissions.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   └── interceptors.ts
│   │   ├── storage/
│   │   └── notifications/
│   ├── utils/
│   │   ├── formatters/
│   │   ├── validators/
│   │   ├── constants/
│   │   ├── helpers/
│   │   └── config/
│   ├── types/
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   └── global.d.ts
│   └── styles/
│       ├── globals.css
│       ├── variables.css
│       ├── mixins.css
│       └── themes/
├── pages/
│   ├── HomePage/
│   ├── DashboardPage/
│   ├── UsersPage/
│   └── NotFoundPage/
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── videos/
├── locales/
│   ├── en/
│   ├── tr/
│   └── de/
├── tests/
│   ├── __mocks__/
│   ├── utils/
│   └── setup.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Dosya ve Klasör İsimlendirme Kuralları

### Bileşen Dosyaları

```typescript
// ✅ Doğru
Header.tsx;
UserProfile.tsx;
ProductCard.tsx;

// ❌ Yanlış
header.tsx;
userprofile.tsx;
product - card.tsx;
```

### Klasör İsimleri

```
// ✅ Doğru - PascalCase (bileşenler için)
components/Button/
components/UserProfile/

// ✅ Doğru - kebab-case (özellikler için)
features/user-management/
features/product-catalog/

// ✅ Doğru - camelCase (utility'ler için)
utils/dateHelpers/
hooks/useLocalStorage/
```

### Dosya Türleri

```
Button.tsx          // Ana bileşen
Button.test.tsx     // Test dosyası
Button.stories.tsx  // Storybook dosyası
Button.module.css   // CSS modülü
Button.types.ts     // Tip tanımları
index.ts           // Barrel export
```

## Best Practices

### 1. Barrel Exports Kullanın

```typescript
// components/ui/index.ts
export { Button } from "./Button";
export { Input } from "./Input";
export { Modal } from "./Modal";

// Kullanım
import { Button, Input, Modal } from "@/components/ui";
```

### 2. Absolute Imports Yapılandırın

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

### 3. Feature-Based Organization

```
features/
├── authentication/
│   ├── components/     // Auth'a özel bileşenler
│   ├── hooks/         // Auth'a özel hook'lar
│   ├── services/      // Auth API çağrıları
│   └── types/         // Auth tip tanımları
```

### 4. Shared vs Feature-Specific

```
shared/components/ui/     // Tüm projede kullanılır
features/auth/components/ // Sadece auth özelliğinde kullanılır
```

### 5. Test Dosya Organizasyonu

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx    // Unit test
│       └── Button.spec.tsx    // Integration test
└── tests/
    ├── e2e/                   // End-to-end testler
    ├── integration/           // Integration testler
    └── utils/                 // Test utility'leri
```

## Örnekler

## Component Tasarımı: Buton Örneği

React'ta farklı buton türleri için iki ana yaklaşım vardır:

### 1. Tek Component + Props Yaklaşımı (ÖNERİLEN)

Bu yaklaşımda tek bir `Button` component'i oluşturup, props ile farklı varyasyonlar sağlarsınız:

```typescript
// components/ui/Button/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `.trim();

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {icon && iconPosition === "left" && !loading && (
        <span className="mr-2">{icon}</span>
      )}

      {children}

      {icon && iconPosition === "right" && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};
```

**Kullanım Örnekleri:**

```typescript
// Farklı buton varyasyonları
<Button variant="primary" size="lg">
  Ana Buton
</Button>

<Button variant="secondary" size="sm">
  İkincil Buton
</Button>

<Button variant="danger" loading>
  Sil
</Button>

<Button variant="outline" icon={<PlusIcon />} iconPosition="left">
  Yeni Ekle
</Button>

<Button variant="ghost" fullWidth>
  Tam Genişlik Buton
</Button>
```

### 2. Ayrı Component'ler Yaklaşımı

Özel durumlar için ayrı component'ler oluşturabilirsiniz:

```typescript
// components/ui/Button/variants/
├── PrimaryButton.tsx
├── SecondaryButton.tsx
├── DangerButton.tsx
├── OutlineButton.tsx
└── IconButton.tsx

// components/ui/Button/PrimaryButton.tsx
export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return <Button variant="primary" {...props} />;
};

// components/ui/Button/IconButton.tsx
interface IconButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 ${sizeClasses[size]}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
```

### 3. Compound Component Pattern

Daha karmaşık buton grupları için:

```typescript
// components/ui/ButtonGroup/ButtonGroup.tsx
interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = "horizontal",
}) => {
  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  return (
    <div className={`inline-flex ${orientationClasses[orientation]}`}>
      {children}
    </div>
  );
};

// Kullanım
<ButtonGroup>
  <Button variant="outline">Sol</Button>
  <Button variant="outline">Orta</Button>
  <Button variant="outline">Sağ</Button>
</ButtonGroup>;
```

### Hangi Yaklaşımı Seçmeli?

#### Tek Component + Props (ÖNERİLEN)

✅ **Avantajları:**

- Daha az kod tekrarı
- Tutarlı API
- Kolay maintenance
- TypeScript tip güvenliği
- Tema sistemleri ile uyumlu

❌ **Dezavantajları:**

- Props interface'i karmaşık olabilir
- Çok fazla conditional logic

#### Ayrı Component'ler

✅ **Avantajları:**

- Özel durumlar için esneklik
- Daha basit prop interface'leri
- Specific use case'ler için optimize

❌ **Dezavantajları:**

- Kod tekrarı
- Maintenance zorluğu
- Tutarsızlık riski

### Önerilen Hibrit Yaklaşım

```typescript
// Ana Button component (genel kullanım)
export { Button } from "./Button";

// Özel durumlar için wrapper'lar
export { IconButton } from "./IconButton";
export { LoadingButton } from "./LoadingButton";
export { ButtonGroup } from "./ButtonGroup";

// components/ui/Button/index.ts
export * from "./Button";
export * from "./IconButton";
export * from "./LoadingButton";
export * from "./ButtonGroup";
```

Bu yaklaşımla hem genel kullanım için esnek bir `Button` component'iniz hem de özel durumlar için optimize edilmiş component'leriniz olur.

## Örnekler

### Küçük E-commerce Projesi

```
src/
├── components/
│   ├── ProductCard.tsx
│   ├── Header.tsx
│   └── Cart.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Checkout.tsx
├── hooks/
│   ├── useCart.ts
│   └── useProducts.ts
├── utils/
│   └── api.ts
└── App.tsx
```

```
src/
├── components/
│   ├── ProductCard.tsx
│   ├── Header.tsx
│   └── Cart.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Checkout.tsx
├── hooks/
│   ├── useCart.ts
│   └── useProducts.ts
├── utils/
│   └── api.ts
└── App.tsx
```

### Büyük SaaS Uygulaması

```
src/
├── features/
│   ├── user-management/
│   ├── billing/
│   ├── analytics/
│   ├── notifications/
│   └── settings/
├── shared/
│   ├── components/ui/
│   ├── layout/
│   ├── hooks/
│   ├── services/
│   └── utils/
├── app/
│   ├── store/
│   ├── router/
│   └── providers/
└── pages/
```

## State Management'a Göre Yapı

### Redux Toolkit ile

```
src/
├── store/
│   ├── index.ts
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── productsSlice.ts
│   └── middleware/
├── features/
│   └── auth/
│       ├── components/
│       ├── store/
│       │   ├── authSlice.ts
│       │   └── authSelectors.ts
│       └── types/
```

### Zustand ile

```
src/
├── stores/
│   ├── authStore.ts
│   ├── productStore.ts
│   └── uiStore.ts
├── features/
└── components/
```

### Context API ile

```
src/
├── contexts/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── CartContext.tsx
├── providers/
│   └── AppProviders.tsx
├── features/
└── components/
```

## Sonuç

Proje yapısı seçimi şu faktörlere bağlıdır:

1. **Proje boyutu**: Küçük projeler için basit, büyük projeler için karmaşık yapı
2. **Takım büyüklüğü**: Daha fazla geliştirici = daha organize yapı
3. **Karmaşıklık seviyesi**: Feature sayısı ve business logic karmaşıklığı
4. **Gelecek planları**: Projenin büyüme potansiyeli

**Genel Tavsiye**: Basit başlayın, ihtiyaç duyduğunuzda karmaşıklaştırın. Erken optimizasyon yapmayın, ama gelecek için esneklik bırakın.

---

_Bu dokümantasyon React projelerinde en iyi pratikleri yansıtır ve sürekli güncellenir._
