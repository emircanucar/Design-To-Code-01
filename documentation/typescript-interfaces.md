# TypeScript Interface'leri - Kapsamlı Rehber

## 📖 İçindekiler

1. [Interface Nedir?](#interface-nedir)
2. [Temel Kullanım](#temel-kullanım)
3. [Props Interface'leri](#props-interfaceleri)
4. [İsteğe Bağlı Properties](#isteğe-bağlı-properties)
5. [Readonly Properties](#readonly-properties)
6. [Index Signatures](#index-signatures)
7. [Function Types](#function-types)
8. [Interface Extension](#interface-extension)
9. [Generic Interfaces](#generic-interfaces)
10. [Best Practices](#best-practices)

---

## Interface Nedir?

TypeScript'te **interface**, nesnelerin şeklini (shape) tanımlayan bir yapıdır. Bir kontrat gibi düşünebilirsiniz - hangi özelliklerin olması gerektiğini ve bunların tiplerini belirtir.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}
```

## Temel Kullanım

### Basit Interface Tanımı

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Kullanım
const person: Person = {
  firstName: "Ahmet",
  lastName: "Yılmaz",
  age: 25,
};
```

### Interface vs Type

```typescript
// Interface ile
interface UserInterface {
  name: string;
  age: number;
}

// Type ile
type UserType = {
  name: string;
  age: number;
};

// İkisi de aynı işi yapar, ama interface extend edilebilir
```

## Props Interface'leri

React component'lerinde props tiplerini tanımlamak için kullanılır:

```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

function Button({ text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn-${variant}`}
    >
      {text}
    </button>
  );
}

// Kullanım
<Button text="Tıkla" onClick={() => console.log('Tıklandı!')} />
<Button text="Kaydet" onClick={handleSave} variant="secondary" />
```

## İsteğe Bağlı Properties

`?` işareti ile property'leri isteğe bağlı yapabilirsiniz:

```typescript
interface User {
  id: number; // Zorunlu
  name: string; // Zorunlu
  email?: string; // İsteğe bağlı
  phone?: string; // İsteğe bağlı
  avatar?: string; // İsteğe bağlı
}

// Geçerli kullanımlar
const user1: User = { id: 1, name: "Ali" };
const user2: User = { id: 2, name: "Ayşe", email: "ayse@email.com" };
const user3: User = {
  id: 3,
  name: "Mehmet",
  email: "mehmet@email.com",
  phone: "+90555123456",
};
```

## Readonly Properties

Değiştirilmesini istemediğiniz property'ler için:

```typescript
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  timeout?: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  version: "1.0.0",
  timeout: 5000,
};

// Hata! readonly property değiştirilemez
// config.apiUrl = "https://new-api.com"; ❌
```

## Index Signatures

Dinamik property'ler için:

```typescript
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [key: string]: number;
}

// Kullanım
const colors: StringDictionary = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
};

const scores: NumberDictionary = {
  math: 95,
  science: 87,
  history: 92,
};
```

## Function Types

Interface'lerde fonksiyon tiplerini tanımlama:

```typescript
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply?: (a: number, b: number) => number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

// Event handler interface'i
interface EventHandlers {
  onClick?: (event: MouseEvent) => void;
  onSubmit?: (data: FormData) => void;
  onError?: (error: Error) => void;
}
```

## Interface Extension

Interface'leri genişletmek (inherit etmek):

```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark: () => void;
}

interface Cat extends Animal {
  color: string;
  meow: () => void;
}

// Kullanım
const myDog: Dog = {
  name: "Karabaş",
  age: 3,
  breed: "Golden Retriever",
  bark: () => console.log("Hav hav!"),
};

// Multiple inheritance
interface Pet extends Animal {
  owner: string;
}

interface ServiceDog extends Dog, Pet {
  serviceType: string;
}
```

## Generic Interfaces

Yeniden kullanılabilir interface'ler:

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

// Kullanım
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Ali", email: "ali@email.com" },
  success: true,
  message: "Kullanıcı bulundu",
};

const productResponse: ApiResponse<Product[]> = {
  data: [
    { id: 1, title: "Laptop", price: 5000 },
    { id: 2, title: "Mouse", price: 50 },
  ],
  success: true,
  message: "Ürünler listelendi",
};
```

## React Component Örnekleri

### Modal Component

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  closeOnBackdrop?: boolean;
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  closeOnBackdrop = true,
}: ModalProps) {
  // Component logic
}
```

### Form Input Component

```typescript
interface InputProps {
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
}: InputProps) {
  return (
    <div className="input-group">
      <label>
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "error" : ""}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
```

## Best Practices

### 1. İsimlendirme Konvansiyonları

```typescript
// ✅ İyi
interface UserProps {}
interface ButtonConfig {}
interface ApiResponse<T> {}

// ❌ Kötü
interface IUser {} // I prefix gereksiz
interface userProps {} // PascalCase kullan
interface button_config {} // snake_case kullanma
```

### 2. Küçük ve Odaklanmış Interface'ler

```typescript
// ✅ İyi - Tek sorumluluk
interface UserPersonalInfo {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

interface UserContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

// ❌ Kötü - Çok büyük interface
interface User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phone?: string;
  address?: string;
  preferences: object;
  permissions: string[];
  lastLogin: Date;
  // ... daha fazla property
}
```

### 3. Union Types Kullanımı

```typescript
interface ButtonProps {
  variant: "primary" | "secondary" | "danger" | "success";
  size: "small" | "medium" | "large";
  children: React.ReactNode;
}

// Sabit değerler için enum da kullanılabilir
enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Success = "success",
}
```

### 4. Dokumentasyon Ekleme

```typescript
/**
 * Kullanıcı profil bilgilerini temsil eden interface
 */
interface UserProfile {
  /** Kullanıcının benzersiz kimliği */
  id: number;

  /** Kullanıcının tam adı */
  fullName: string;

  /**
   * Kullanıcının e-posta adresi
   * @example "user@example.com"
   */
  email: string;

  /**
   * Kullanıcının profil fotoğrafı URL'i (isteğe bağlı)
   * @default undefined
   */
  avatar?: string;
}
```

## Yaygın Hatalar ve Çözümleri

### 1. Interface vs Type Karışıklığı

```typescript
// Interface - extend edilebilir, declaration merging yapılabilir
interface User {
  name: string;
}

interface User {
  // Aynı interface'i genişletir
  age: number;
}

// Type - union, intersection, computed properties için daha iyi
type Status = "loading" | "success" | "error";
type UserWithStatus = User & { status: Status };
```

### 2. Gereksiz Optional Properties

```typescript
// ❌ Kötü - her şey optional
interface UserProps {
  name?: string;
  email?: string;
  age?: number;
}

// ✅ İyi - sadece gerçekten optional olanlar
interface UserProps {
  name: string; // Zorunlu
  email: string; // Zorunlu
  age?: number; // İsteğe bağlı
}
```

## Özet

Interface'ler TypeScript'in en güçlü özelliklerinden biridir. Doğru kullanıldığında:

- **Tip güvenliği** sağlar
- **Kod tamamlama** özelliği sunar
- **Hataları erken yakalar**
- **Kodun okunabilirliğini** artırır
- **Takım çalışmasını** kolaylaştırır

React projelerinde component props'larını tanımlamak için vazgeçilmezdir!
