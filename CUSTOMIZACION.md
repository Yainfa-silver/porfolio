# GUÍA DE CUSTOMIZACIÓN AVANZADA

## 📝 Cómo Agregar Proyectos

Edita `proyectos.html` y reemplaza el placeholder con una estructura como esta:

```html
<div class="tech-grid">
  <div class="tech-card">
    <span class="icon">🚀</span>
    <div class="name">Mi Proyecto 1</div>
    <p style="font-size: 0.75rem; color: var(--color-secondary); margin-top: 0.5rem;">
      Descripción breve del proyecto
    </p>
    <a href="https://enlace-al-proyecto.com" target="_blank" style="font-size: 0.75rem;">
      Ver →
    </a>
  </div>
  <!-- Más tarjetas... -->
</div>
```

## 🎨 Personalizaciones CSS Adicionales

### Oscurecer todavía más
```css
:root {
  --color-bg: #000000;        /* Negro puro */
  --color-border: #001a00;    /* Verde aún más oscuro */
}
```

### Usar colores alternativos
```css
:root {
  --color-primary: #ff00ff;      /* Magenta */
  --color-secondary: #ffff00;    /* Amarillo */
  --color-accent: #00ffff;       /* Cian */
}
```

### Aumentar intensidad de brillo
```css
:root {
  --glow-primary: 0 0 20px rgba(0, 255, 0, 0.8);
  --glow-secondary: 0 0 20px rgba(0, 255, 255, 0.8);
  --glow-accent: 0 0 20px rgba(255, 0, 255, 0.8);
}
```

### Cambiar tamaño de scanlines
En `css/main.css`, busca `body::before` y modifica:
```css
body::before {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 2px,    /* Aumenta el valor para líneas más gruesas */
    transparent 2px,
    transparent 4px
  );
}
```

## 🎵 Agregar Sonidos (Opcional)

1. Crea `js/sounds.js`:

```javascript
class SoundEffects {
  constructor() {
    this.sounds = {
      glitch: new Audio('./assets/sounds/glitch.mp3'),
      channel: new Audio('./assets/sounds/channel-switch.mp3')
    };
  }

  playGlitch() {
    this.sounds.glitch.play();
  }

  playChannelSound() {
    this.sounds.channel.currentTime = 0;
    this.sounds.channel.play();
  }
}

window.soundEffects = new SoundEffects();
```

2. Agrega en el HTML:
```html
<script src="./js/sounds.js"></script>
```

3. Llama a los sonidos en `js/channels.js`:
```javascript
nextChannel() {
  // ... código existente ...
  window.soundEffects?.playChannelSound();
}
```

## 🌟 Agregar Efectos Personalizados

### Efecto de ceniza (partículas cayendo)
En `js/glitch.js`:

```javascript
createAshEffect() {
  const ash = document.createElement('div');
  ash.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: rgba(100, 100, 100, 0.3);
    border-radius: 50%;
    pointer-events: none;
    left: ${Math.random() * 100}%;
    top: -10px;
    z-index: 1;
    animation: fall ${5 + Math.random() * 5}s linear forwards;
  `;
  document.body.appendChild(ash);
  
  setTimeout(() => ash.remove(), 10000);
}

// Lanzar ceniza ocasionalmente
setInterval(() => {
  if (Math.random() > 0.95) {
    this.createAshEffect();
  }
}, 1000);
```

## 🔗 Agregar Páginas Adicionales

### Estructura básica para nueva página:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MI PÁGINA // LAIN</title>
  <link rel="stylesheet" href="./css/main.css">
</head>
<body data-page="mi-pagina">

  <main>
    <nav>
      <button onclick="window.location.href='./index.html'">← Inicio</button>
    </nav>

    <h1 class="glow">[MI PÁGINA]</h1>
    <!-- Tu contenido aquí -->
  </main>

  <script src="./js/config.js"></script>
  <script src="./js/glitch.js"></script>

</body>
</html>
```

Luego agrégala a los botones de navegación:
```html
<button onclick="window.location.href='./mi-pagina.html'">Mi Página</button>
```

## 🎯 Agregar Analytics (Opcional)

En `index.html`, antes del cierre `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Reemplaza `GA_ID` con tu ID de Google Analytics.

## 📱 Modo Oscuro Todavía Más Oscuro

Agrega esto a `css/main.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #050505;
    filter: brightness(0.95);
  }
}
```

## 🚀 Performance Tips

1. **Optimizar GIF**: Usa herramientas como `giflossy` o `ezgif.com`
2. **Comprimir CSS**: Minificar `main.css` en producción
3. **Lazy Load**: Para muchas imágenes, agregar `loading="lazy"`

```html
<img src="./assets/gif/character.gif" loading="lazy" />
```

4. **Caché**: Usar SW o headers HTTP para caché

## 🔐 Seguridad

- No guardes URLs privadas en `config.js`
- Si usas un backend, protege tus endpoints
- Valida inputs en formularios (si los agregas)

---

¡Diviértete personalizando tu portfolio! 🖤
