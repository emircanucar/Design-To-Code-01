# React Component Tasarımı Rehberi

## İçindekiler

1. [Component Tasarım Prensipleri](#component-tasarım-prensipleri)
2. [Buton Component Tasarımı](#buton-component-tasarımı)
3. [Form Component'leri](#form-componentleri)
4. [Layout Component'leri](#layout-componentleri)
5. [Compound Component Pattern](#compound-component-pattern)
6. [Render Props Pattern](#render-props-pattern)
7. [Hook-based Component'ler](#hook-based-componentler)
8. [Performance Optimizasyonu](#performance-optimizasyonu)
9. [Testing Strategies](#testing-strategies)
10. [Best Practices](#best-practices)

## Component Tasarım Prensipleri

### 1. Single Responsibility Principle

Her component tek bir sorumluluğa sahip olmalıdır.

```typescript
// ❌ Yanlış - Çok fazla sorumluluk
const UserDashboard = () => {
  // User bilgilerini getir
  // Notifications göster
  // Analytics data göster
  // Settings yönet
  // ...
};

// ✅ Doğru - Tek sorumluluk
const UserProfile = () => {
  /* Sadece user profil bilgileri */
};
const NotificationPanel = () => {
  /* Sadece bildirimler */
};
const AnalyticsDashboard = () => {
  /* Sadece analytics */
};
const UserSettings = () => {
  /* Sadece ayarlar */
};
```

### 2. Composition over Inheritance

React'ta kalıtım yerine kompozisyon tercih edilmelidir.

```typescript
// ✅ Composition pattern
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

const UserCard = ({ user }) => (
  <Card className="max-w-sm">
    <img src={user.avatar} alt={user.name} />
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </Card>
);

const ProductCard = ({ product }) => (
  <Card className="max-w-md">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </Card>
);
```

### 3. Props Interface Design

Props interface'i açık, anlaşılır ve extensible olmalıdır.

```typescript
// ✅ İyi props tasarımı
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  "data-testid"?: string;
}
```

## Buton Component Tasarımı

### Temel Button Component

```typescript
// components/ui/Button/Button.tsx
import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = cn(
      baseClasses,
      buttonVariants[variant],
      buttonSizes[size],
      fullWidth && "w-full",
      className
    );

    const isDisabled = disabled || loading;

    return (
      <button ref={ref} className={classes} disabled={isDisabled} {...props}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

        {!loading && icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}

        {children}

        {!loading && icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
```

### Özel Button Varyantları

```typescript
// components/ui/Button/IconButton.tsx
interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
  "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = "md", variant = "ghost", className, ...props }, ref) => {
    const sizeClasses = {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn("rounded-full", sizeClasses[size], className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

// components/ui/Button/FloatingActionButton.tsx
export const FloatingActionButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ icon, className, ...props }, ref) => {
  return (
    <IconButton
      ref={ref}
      icon={icon}
      size="lg"
      variant="primary"
      className={cn(
        "fixed bottom-6 right-6 h-14 w-14 shadow-lg hover:shadow-xl",
        "rounded-full transition-all duration-200",
        className
      )}
      {...props}
    />
  );
});
```

### Button Group Component

```typescript
// components/ui/Button/ButtonGroup.tsx
interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  variant?: ButtonProps["variant"];
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = "horizontal",
  size,
  variant,
  className,
}) => {
  const orientationClasses = {
    horizontal:
      "flex-row [&>button:not(:first-child)]:ml-0 [&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button:not(:last-child)]:border-r-0",
    vertical:
      "flex-col [&>button:not(:first-child)]:mt-0 [&>button:not(:first-child)]:rounded-t-none [&>button:not(:last-child)]:rounded-b-none [&>button:not(:last-child)]:border-b-0",
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Button) {
      return React.cloneElement(child, {
        size: size || child.props.size,
        variant: variant || child.props.variant,
      });
    }
    return child;
  });

  return (
    <div
      className={cn("inline-flex", orientationClasses[orientation], className)}
    >
      {enhancedChildren}
    </div>
  );
};
```

## Form Component'leri

### Input Component

```typescript
// components/ui/Form/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn("flex flex-col space-y-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full px-3 py-2 border border-gray-300 rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "disabled:bg-gray-50 disabled:text-gray-500",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);
```

### Form Field Component

```typescript
// components/ui/Form/FormField.tsx
interface FormFieldProps {
  children: React.ReactElement;
  label?: string;
  error?: string;
  required?: boolean;
  description?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  error,
  required,
  description,
}) => {
  const childId =
    children.props.id || `field-${Math.random().toString(36).substr(2, 9)}`;

  const enhancedChild = React.cloneElement(children, {
    id: childId,
    "aria-describedby": description ? `${childId}-description` : undefined,
    "aria-invalid": error ? "true" : "false",
  });

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={childId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {enhancedChild}

      {description && !error && (
        <p id={`${childId}-description`} className="text-sm text-gray-500">
          {description}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
```

## Layout Component'leri

### Container Component

```typescript
// components/ui/Layout/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const containerSizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  className,
}) => {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
};
```

### Grid Component

```typescript
// components/ui/Layout/Grid.tsx
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-12",
};

const gridGaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = "md",
  className,
}) => {
  return (
    <div className={cn("grid", gridCols[cols], gridGaps[gap], className)}>
      {children}
    </div>
  );
};
```

## Compound Component Pattern

### Accordion Component

```typescript
// components/ui/Accordion/Accordion.tsx
interface AccordionContextType {
  openItems: string[];
  toggleItem: (id: string) => void;
  multiple?: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultValue?: string | string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple = false,
  defaultValue = [],
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (multiple) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

// AccordionItem component
interface AccordionItemProps {
  children: React.ReactNode;
  id: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  id,
}) => {
  return (
    <div className="border border-gray-200 rounded-md">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { itemId: id });
        }
        return child;
      })}
    </div>
  );
};

// AccordionTrigger component
interface AccordionTriggerProps {
  children: React.ReactNode;
  itemId?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  itemId,
}) => {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within Accordion");

  const { openItems, toggleItem } = context;
  const isOpen = itemId ? openItems.includes(itemId) : false;

  return (
    <button
      className="w-full px-4 py-3 text-left font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => itemId && toggleItem(itemId)}
    >
      <div className="flex justify-between items-center">
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </div>
    </button>
  );
};

// AccordionContent component
interface AccordionContentProps {
  children: React.ReactNode;
  itemId?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  itemId,
}) => {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionContent must be used within Accordion");

  const { openItems } = context;
  const isOpen = itemId ? openItems.includes(itemId) : false;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-screen" : "max-h-0"
      )}
    >
      <div className="px-4 pb-3">{children}</div>
    </div>
  );
};

// Compound component pattern kullanımı
<Accordion multiple defaultValue={["item-1"]}>
  <AccordionItem id="item-1">
    <AccordionTrigger>Başlık 1</AccordionTrigger>
    <AccordionContent>İçerik 1</AccordionContent>
  </AccordionItem>
  <AccordionItem id="item-2">
    <AccordionTrigger>Başlık 2</AccordionTrigger>
    <AccordionContent>İçerik 2</AccordionContent>
  </AccordionItem>
</Accordion>;
```

## Performance Optimizasyonu

### React.memo Kullanımı

```typescript
// components/ui/Card.tsx
interface CardProps {
  title: string;
  content: string;
  onAction?: () => void;
}

export const Card = React.memo<CardProps>(({ title, content, onAction }) => {
  console.log("Card rendered:", title); // Render tracking için

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      {onAction && <Button onClick={onAction}>Action</Button>}
    </div>
  );
});
```

### useCallback ve useMemo

```typescript
// components/ProductList.tsx
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
  onProductClick: (id: string) => void;
  searchTerm: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
  searchTerm,
}) => {
  // Filtrelenmiş ürünleri memoize et
  const filteredProducts = React.useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Click handler'ı memoize et
  const handleProductClick = React.useCallback(
    (id: string) => {
      onProductClick(id);
    },
    [onProductClick]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={handleProductClick}
        />
      ))}
    </div>
  );
};
```

## Testing Strategies

### Component Test Örneği

```typescript
// components/ui/Button/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies correct variant classes", () => {
    render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-red-600");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("shows loading state correctly", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders with icon", () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;
    render(
      <Button icon={<TestIcon />} iconPosition="left">
        With Icon
      </Button>
    );

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
});
```

## Best Practices

### 1. Consistent API Design

```typescript
// ✅ Tutarlı props pattern
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  "data-testid"?: string;
}
```

### 2. Forward Refs

```typescript
// ✅ Ref forwarding
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);
```

### 3. Display Names

```typescript
// ✅ Component display name
Button.displayName = "Button";
```

### 4. Prop Validation

```typescript
// ✅ Runtime prop validation (development)
if (process.env.NODE_ENV === "development") {
  Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    children: PropTypes.node.isRequired,
  };
}
```

### 5. Accessibility

```typescript
// ✅ Accessibility support
<button
  aria-label={ariaLabel}
  aria-pressed={pressed}
  aria-disabled={disabled}
  role="button"
  tabIndex={disabled ? -1 : 0}
>
  {children}
</button>
```

### 6. CSS-in-JS vs CSS Modules

```typescript
// ✅ CSS Modules approach
import styles from "./Button.module.css";

const Button = ({ variant, children }) => (
  <button className={cn(styles.button, styles[variant])}>{children}</button>
);

// ✅ Tailwind CSS approach
const Button = ({ variant, children }) => (
  <button className={cn("px-4 py-2 rounded", variantClasses[variant])}>
    {children}
  </button>
);
```

### 7. Component Documentation

```typescript
/**
 * Button component with multiple variants and sizes
 *
 * @param variant - Visual style variant
 * @param size - Size of the button
 * @param loading - Shows loading spinner
 * @param disabled - Disables the button
 * @param children - Button content
 *
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... };
```

---

Bu rehber React component tasarımında modern yaklaşımları ve best practice'leri kapsamaktadır. Her component'in kendi sorumluluğuna sahip olması, yeniden kullanılabilir olması ve test edilebilir olması önemlidir.
