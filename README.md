# JWX: The Dynamic Component Language by JW Limited Ltd.
Compose the Web, JWX-style!

## Language Name: JWX (JW eXtensible)

JWX is a powerful, extensible component-based language that brings the flexibility of modern web frameworks into a familiar HTML-like syntax. Developed by JW Limited Ltd., JWX empowers developers to create dynamic, reusable components with ease.

## File Extensions:

1. `.jwx` - Main JWX component files
2. `.jwxc` - JWX component library files (collections of components)
3. `.jwxs` - JWX style files (for component-specific styles)
4. `.jwxm` - JWX module files (for shared logic and utilities)

## Key Features and Descriptions:

1. **Intuitive Syntax**: 
   JWX uses an HTML-like syntax, making it easy for web developers to adopt and understand.

2. **Dynamic Expressions**: 
   Embed dynamic content effortlessly with `{{ }}` expressions.

3. **Smart Control Structures**: 
   Use `@if`, `@for`, and `@switch` for powerful conditional rendering and loops.

4. **Scoped Styling**: 
   Keep your styles encapsulated with component-scoped CSS using `:component`.

5. **Lifecycle Scripts**: 
   Manage component behavior with init, methods, computed properties, and watchers.

6. **Subcomponents**: 
   Build complex UIs by composing smaller, reusable components.

7. **Global State Management**: 
   Easily share data across components with the built-in `$global` object.

8. **Helper Functions**: 
   Boost productivity with a rich set of built-in helpers.

## Language Description:

JWX (JW eXtensible) is a cutting-edge component language that marries the simplicity of HTML with the power of modern web frameworks. Developed by JW Limited Ltd., JWX empowers developers to create dynamic, reusable, and maintainable web components with an intuitive syntax.

At its core, JWX extends HTML's familiar structure with powerful features like dynamic expressions, smart control structures, and scoped styling. This unique approach allows developers to build complex, interactive web applications using a template language that feels natural and easy to learn.

JWX shines in its ability to encapsulate component logic, styles, and structure in a single file, promoting a clean and organized codebase. With features like subcomponents, lifecycle scripts, and built-in state management, JWX scales effortlessly from simple widgets to full-fledged web applications.

Whether you're building a small interactive element or a large-scale web platform, JWX provides the tools and flexibility to bring your vision to life. Join the JWX revolution and experience the future of web component development!

## Core Concepts:

1. **Components**: The building blocks of JWX applications.
2. **Props**: Input values that allow components to be customized.
3. **Expressions**: Dynamic content embedded within components.
4. **Control Structures**: Tools for conditional rendering and iteration.
5. **Scoped Styles**: Component-specific CSS that doesn't leak.
6. **Lifecycle Scripts**: Methods to control component behavior throughout its lifecycle.
7. **Subcomponents**: Smaller, reusable pieces within larger components.
8. **Global State**: A shared data store accessible across components.

# Syntax Definition
## 1. Component Definition

Components are defined using HTML-like syntax with special attributes and tags.

```html
<div component="componentName" prop-propName="propDefinition">
  <!-- Component content goes here -->
</div>
```

- The `component` attribute defines the component's name.
- Props are defined using attributes prefixed with `prop-`.

## 2. Prop Definitions

Props are defined with a special syntax: `prop-propName="defaultValue:type:validations"`

- `defaultValue`: The default value for the prop. Use `!` to mark as required.
- `type`: The expected type of the prop (e.g., string, number, array).
- `validations`: Additional validation rules, separated by `|`.

Example:
```html
<div component="userProfile" prop-age="!:number:min:18|max:120">
```

## 3. Content and Expressions

Component content can include static HTML and dynamic expressions.

- Use `{{ expression }}` for dynamic content.
- Expressions can include prop values, methods, computed properties, and helpers.

Example:
```html
<h1>{{ name | toUpperCase }}</h1>
<p>Age: {{ age }}</p>
```

## 4. Control Structures

The system supports various control structures for dynamic rendering.

### 4.1 Conditional Rendering

```html
@if(condition)
  <!-- Content if true -->
@else
  <!-- Content if false -->
@endif
```

### 4.2 Loops

```html
@for(item in items)
  <!-- Repeated content -->
@endfor
```

### 4.3 Switch Statements

```html
@switch(expression)
  @case(value1)
    <!-- Content for value1 -->
  @case(value2)
    <!-- Content for value2 -->
  @default
    <!-- Default content -->
@endswitch
```

## 5. Subcomponents

Components can include subcomponents, which are reusable pieces within the main component.

```html
<subcomponent name="subcomponentName">
  <!-- Subcomponent content -->
</subcomponent>
```

## 6. Styling

Styles can be scoped to the component using the `:component` selector.

```html
<style>
  :component {
    /* Styles applied only to this component */
  }
  :component .class-name {
    /* Styles for elements with class-name within this component */
  }
</style>
```

## 7. Component Scripts

Scripts provide additional functionality to components. They are defined using `<script>` tags with specific `component-script` attributes.

### 7.1 Initialization Script

```html
<script component-script="init">
  // Code to run when the component is initialized
</script>
```

### 7.2 Methods

```html
<script component-script="methods">
{
  "methodName": function() {
    // Method implementation
  }
}
</script>
```

### 7.3 Computed Properties

```html
<script component-script="computed">
{
  "computedPropName": function() {
    // Computed property implementation
    return someValue;
  }
}
</script>
```

### 7.4 Watchers

```html
<script component-script="watch">
{
  "watchedPropName": function(newValue, oldValue) {
    // Code to run when watchedPropName changes
  }
}
</script>
```

## 8. Event Handling

Event handling is done using the `data-method` attribute.

```html
<button data-method="methodName">Click me</button>
```

## 9. Helpers

The system provides built-in helpers that can be used in expressions:

- `toUpperCase`, `toLowerCase`: String transformations
- `formatDate`: Date formatting
- `if`: Conditional helper
- `forEach`: Array iteration
- And more...

Example usage: `{{ name | toUpperCase }}`

## 10. Global State

Components can access and modify a global state object using `$global`.

Example: `{{ $global.someValue }}`

---

This syntax allows for the creation of complex, interactive components with features similar to modern front-end frameworks, while maintaining a unique, HTML-based template structure.
