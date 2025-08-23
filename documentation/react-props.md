# React Props - Kapsamlı Rehber

## 📖 İçindekiler

1. [Props Nedir?](#props-nedir)
2. [Temel Props Kullanımı](#temel-props-kullanımı)
3. [Props Types ve Interface](#props-types-ve-interface)
4. [Default Values (Varsayılan Değerler)](#default-values-varsayılan-değerler)
5. [Children Props](#children-props)
6. [Function Props (Callback)](#function-props-callback)
7. [Props Destructuring](#props-destructuring)
8. [Conditional Props](#conditional-props)
9. [Props Validation](#props-validation)
10. [Advanced Props Patterns](#advanced-props-patterns)
11. [Best Practices](#best-practices)

---

## Props Nedir?

**Props** (properties), React component'lerine veri geçirmek için kullanılan mekanizmadır. HTML attribute'ları gibi düşünebilirsiniz - parent component'ten child component'e bilgi aktarımı yapar.

```jsx
// Parent component
<Button text="Tıkla Beni" color="blue" onClick={handleClick} />

// Child component bu props'ları alır ve kullanır
```

## Temel Props Kullanımı

### Basit Props Gönderme

```tsx
// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Ahmet" age={25} />
      <Welcome name="Ayşe" age={30} />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return (
    <h1>
      Merhaba {props.name}! Sen {props.age} yaşındasın.
    </h1>
  );
}
```

### TypeScript ile Props

```tsx
interface WelcomeProps {
  name: string;
  age: number;
}

function Welcome({ name, age }: WelcomeProps) {
  return (
    <h1>
      Merhaba {name}! Sen {age} yaşındasın.
    </h1>
  );
}
```

## Props Types ve Interface

### Farklı Prop Tipleri

```tsx
interface ComponentProps {
  // Primitive types
  title: string;
  count: number;
  isActive: boolean;

  // Optional props
  description?: string;
  maxItems?: number;

  // Array props
  items: string[];
  numbers: number[];

  // Object props
  user: {
    name: string;
    email: string;
  };

  // Union types
  size: "small" | "medium" | "large";
  status: "loading" | "success" | "error";

  // Function props
  onClick: () => void;
  onSubmit: (data: FormData) => void;
  onChange: (value: string) => void;
}
```

### Gerçek Örnek - Button Component

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <button
      type={type}
      className={allClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Yükleniyor...' : children}
    </button>
  );
}

// Kullanım örnekleri
<Button>Normal Buton</Button>
<Button variant="danger" size="large">Sil</Button>
<Button loading={true}>Kaydet</Button>
<Button disabled onClick={() => console.log('tıklandı')}>
  Devre Dışı
</Button>
```

## Default Values (Varsayılan Değerler)

### 3 Farklı Yöntem

```tsx
interface UserCardProps {
  name: string;
  role?: string;
  avatar?: string;
  isOnline?: boolean;
}

// 1. Destructuring ile default değer
function UserCard({
  name,
  role = "Kullanıcı",
  avatar = "/default-avatar.png",
  isOnline = false,
}: UserCardProps) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      {isOnline && <span className="online-badge">Çevrimiçi</span>}
    </div>
  );
}

// 2. DefaultProps ile (eski yöntem)
UserCard.defaultProps = {
  role: "Kullanıcı",
  avatar: "/default-avatar.png",
  isOnline: false,
};

// 3. Function içinde kontrol
function UserCard({ name, role, avatar, isOnline }: UserCardProps) {
  const finalRole = role || "Kullanıcı";
  const finalAvatar = avatar || "/default-avatar.png";
  const finalIsOnline = isOnline ?? false;

  // Component render
}
```

## Children Props

### Temel Children Kullanımı

```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Kullanım
<Card title="Kullanıcı Bilgileri">
  <p>Bu card içeriğidir</p>
  <Button>Düzenle</Button>
  <Button variant="danger">Sil</Button>
</Card>;
```

### Multiple Children (Slot Pattern)

```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

function Modal({ isOpen, onClose, header, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {header && (
          <div className="modal-header">
            {header}
            <button onClick={onClose}>×</button>
          </div>
        )}

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

// Kullanım
<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  header={<h2>Kullanıcı Düzenle</h2>}
  footer={
    <>
      <Button onClick={() => setShowModal(false)}>İptal</Button>
      <Button variant="primary" onClick={handleSave}>
        Kaydet
      </Button>
    </>
  }
>
  <form>
    <input type="text" placeholder="İsim" />
    <input type="email" placeholder="E-posta" />
  </form>
</Modal>;
```

## Function Props (Callback)

### Event Handler Props

```tsx
interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: string;
}

function FormInput({
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  placeholder,
  error,
}: FormInputProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className={error ? "error" : ""}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

// Parent component'te kullanım
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = () => {
    if (!email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Geçerli bir e-posta girin" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  return (
    <form>
      <FormInput
        label="İsim"
        value={name}
        onChange={setName}
        placeholder="Adınızı girin"
      />

      <FormInput
        label="E-posta"
        type="email"
        value={email}
        onChange={setEmail}
        onBlur={validateEmail}
        placeholder="E-posta adresinizi girin"
        error={errors.email}
      />
    </form>
  );
}
```

## Props Destructuring

### Farklı Destructuring Yöntemleri

```tsx
interface UserProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  showEmail?: boolean;
  className?: string;
}

// 1. Normal destructuring
function UserProfile({ user, showEmail = true, className = "" }: UserProps) {
  return (
    <div className={`user-profile ${className}`}>
      <img src={user.avatar || "/default.png"} alt={user.name} />
      <h3>{user.name}</h3>
      {showEmail && <p>{user.email}</p>}
    </div>
  );
}

// 2. Nested destructuring
function UserProfile({
  user: { name, email, avatar = "/default.png" },
  showEmail = true,
  className = "",
}: UserProps) {
  return (
    <div className={`user-profile ${className}`}>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      {showEmail && <p>{email}</p>}
    </div>
  );
}

// 3. Rest operator ile
function UserProfile({
  user,
  ...otherProps
}: UserProps & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...otherProps}
      className={`user-profile ${otherProps.className || ""}`}
    >
      <img src={user.avatar || "/default.png"} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
}
```

## Conditional Props

### Koşullu Props Render

```tsx
interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

function Alert({
  type,
  message,
  dismissible = false,
  onDismiss,
  autoClose = false,
  autoCloseDelay = 3000
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  // Auto close logic
  useEffect(() => {
    if (autoClose && visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        onDismiss?.();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, visible, onDismiss]);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      {dismissible && (
        <button onClick={handleDismiss} className="alert-close">
          ×
        </button>
      )}
    </div>
  );
}

// Kullanım
<Alert type="success" message="İşlem başarılı!" />
<Alert
  type="error"
  message="Bir hata oluştu!"
  dismissible
  onDismiss={() => console.log('Alert kapatıldı')}
/>
<Alert
  type="info"
  message="Bu mesaj 5 saniye sonra kaybolacak"
  autoClose
  autoCloseDelay={5000}
/>
```

## Props Validation

### Runtime Props Validation

```tsx
import { useEffect } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
}

function Button({ children, onClick, variant = "primary", size }: ButtonProps) {
  // Development ortamında props validation
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (!children) {
        console.warn("Button: children prop is required");
      }

      if (typeof children === "string" && children.length > 20) {
        console.warn(
          "Button: children text is too long, consider shorter text"
        );
      }

      if (size && !["small", "large"].includes(size)) {
        console.error('Button: size prop must be "small" or "large"');
      }
    }
  }, [children, size]);

  return (
    <button
      className={`btn btn-${variant} ${size ? `btn-${size}` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## Advanced Props Patterns

### Polymorphic Components

```tsx
interface ButtonProps<T extends React.ElementType = 'button'> {
  as?: T;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

type ButtonPropsWithElement<T extends React.ElementType> = ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>;

function Button<T extends React.ElementType = 'button'>({
  as,
  children,
  variant = 'primary',
  ...otherProps
}: ButtonPropsWithElement<T>) {
  const Component = as || 'button';

  return (
    <Component
      className={`btn btn-${variant}`}
      {...otherProps}
    >
      {children}
    </Component>
  );
}

// Kullanım
<Button>Normal Button</Button>
<Button as="a" href="/home">Link Button</Button>
<Button as="div" onClick={handleClick}>Div Button</Button>
```

### Render Props Pattern

```tsx
interface DataFetcherProps<T> {
  url: string;
  children: (
    data: T | null,
    loading: boolean,
    error: string | null
  ) => React.ReactNode;
}

function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return children(data, loading, error);
}

// Kullanım
<DataFetcher<User[]> url="/api/users">
  {(users, loading, error) => {
    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;
    return (
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }}
</DataFetcher>;
```

## Best Practices

### 1. Props İsimlendirme

```tsx
// ✅ İyi
interface ButtonProps {
  isLoading: boolean; // boolean için is/has prefix
  hasError: boolean;
  onClick: () => void; // event handler için on prefix
  onSubmit: () => void;
  variant: string; // açıklayıcı isim
  children: React.ReactNode;
}

// ❌ Kötü
interface ButtonProps {
  loading: boolean; // belirsiz
  error: boolean; // belirsiz
  click: () => void; // eksik prefix
  submit: () => void; // eksik prefix
  type: string; // çok genel
  content: React.ReactNode; // standart değil
}
```

### 2. Props Gruplandırma

```tsx
// ✅ İyi - İlgili props'ları grupla
interface UserCardProps {
  // User data
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };

  // Display options
  showEmail?: boolean;
  showAvatar?: boolean;
  compact?: boolean;

  // Event handlers
  onClick?: (user: User) => void;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;

  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

### 3. Props Validation

```tsx
// ✅ İyi - Required ve optional props'ları ayır
interface ModalProps {
  // Required
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;

  // Optional - default değerli
  title?: string;
  size?: "small" | "medium" | "large";
  closeOnBackdrop?: boolean;

  // Optional - no default
  header?: React.ReactNode;
  footer?: React.ReactNode;
}
```

### 4. Performance İpuçları

```tsx
// ✅ İyi - Callback'leri memoize et
const UserList = ({ users, onUserClick }: UserListProps) => {
  const handleUserClick = useCallback(
    (user: User) => {
      onUserClick(user);
    },
    [onUserClick]
  );

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={handleUserClick} />
      ))}
    </div>
  );
};

// ✅ İyi - Complex props'ları memoize et
const ExpensiveComponent = ({ data, config }: Props) => {
  const processedData = useMemo(() => {
    return processData(data, config);
  }, [data, config]);

  return <div>{/* render */}</div>;
};
```

## Gerçek Proje Örnekleri

### BrandLogo Component (Mevcut Projemizden)

```tsx
import brandlogo from '../../assets/brand-logo.svg'

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  alt?: string;
}

function BrandLogo({
  className = "",
  width,
  height,
  onClick,
  alt = "Brand Logo"
}: BrandLogoProps) {
  return (
    <img
      src={brandlogo}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  )
}

export default BrandLogo

// Kullanım örnekleri
<BrandLogo />
<BrandLogo className="header-logo" width={120} />
<BrandLogo onClick={() => navigate('/')} className="clickable-logo" />
```

### Navigation Component

```tsx
interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: number;
  isActive?: boolean;
}

interface NavigationProps {
  items: NavItem[];
  onItemClick?: (item: NavItem) => void;
  orientation?: "horizontal" | "vertical";
  variant?: "primary" | "secondary";
  className?: string;
}

function Navigation({
  items,
  onItemClick,
  orientation = "horizontal",
  variant = "primary",
  className = "",
}: NavigationProps) {
  return (
    <nav className={`nav nav-${orientation} nav-${variant} ${className}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`nav-item ${item.isActive ? "active" : ""}`}
          onClick={(e) => {
            if (onItemClick) {
              e.preventDefault();
              onItemClick(item);
            }
          }}
        >
          {item.icon && <span className="nav-icon">{item.icon}</span>}
          <span className="nav-label">{item.label}</span>
          {item.badge && <span className="nav-badge">{item.badge}</span>}
        </a>
      ))}
    </nav>
  );
}
```

## Özet

Props, React'in temel yapı taşlarından biridir ve doğru kullanımı:

- **Yeniden kullanılabilir** component'ler oluşturur
- **Type safety** sağlar (TypeScript ile)
- **Performans** optimizasyonu sağlar
- **Maintainable** kod yazımını destekler
- **Component composition** patternini mümkün kılar

Props'ları doğru kullanarak temiz, esnek ve güçlü React uygulamaları geliştirebilirsiniz!
