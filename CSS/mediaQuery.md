# Media Query

<br>

## Sintaxis en archivo CSS

---

```css
.container {
    width: 100%;
}
.items {
    width: 95%;
}
@media (min-width: 600px) {
    .contaimer {
        max-width: 540px;
    }
    .items {
        width: 200px;
    }
}
@media (min-width: 900px) {
    .container {
        max-width: 860px;
    }
    .items {
        width: 250px;
    }
}
```

<br>

## Sintaxis en `<head>` HTML

---

Se crean tantos archivos CSS como `media quieries` se definan. esta es una muy buena práctica.

```html
<link rel="stylesheet" href="main.css" />
<link 
    rel="stylesheet" 
    href="tablet.css" 
    media="screen and (min-width: 600px)" />
<link 
    rel="stylesheet" 
    href="desktop.css" 
     media="screen and (min-width: 900px)" />
```

<br>

## Breakpoints de Bootstrap

---

| Nombre | Breakpoint | container max-width |
| :----: | :----: | :----: |
| xs | >576px | auto |
| sm | 576px | 540px |
| md | 768px | 720px |
| lg | 992px | 960px |
| xl | 1200px | 1140px |
| xxl | 1400px | 1350px |
