# PORTFOLIO Y2K - LAIN AESTHETIC

Portfolio personal con estética inspirada en **Serial Experiments Lain** y cultura visual Y2K.

## 🖥️ Descripción

Una web estática que simula la interfaz de un antiguo monitor CRT (televisión de tubo de rayos catódicos) con efectos visuales como scanlines, glitch y colores neón fosforescentes.

## 📁 Estructura del Proyecto

```
/portfolio
├── index.html                 # Página principal
├── proyectos.html            # Sección de proyectos
├── sobre-mi.html             # Sección "Sobre mí" con sistema de canales
├── requisitos.txt            # Documento de requisitos original
├── README.md                 # Este archivo
│
├── /css
│   └── main.css              # Estilos principales + efectos CRT
│
├── /js
│   ├── config.js             # Configuración (enlaces, frases, datos)
│   ├── dialog.js             # Lógica del personaje interactivo
│   ├── channels.js           # Sistema de cambio de canales
│   └── glitch.js             # Efectos visuales dinámicos
│
└── /assets
    ├── /gif
    │   └── character.gif     # GIF del personaje anime (reemplazar)
    └── /icons
        └── (iconos opcionales)
```

## 🎨 Características

### Efectos Visuales
- ✅ **Scanlines**: Líneas horizontales que simulan barrido CRT
- ✅ **Viñeta**: Efecto de oscuridad en bordes (CRT curvature)
- ✅ **Glitch**: Efecto de interferencia visual aleatoria
- ✅ **Parpadeo**: Flicker ocasional en textos seleccionados
- ✅ **Efecto de escritura**: Typewriter effect en diálogos

### Funcionalidades
- ✅ **Sistema de Canales**: Navegación entre secciones tipo TV
- ✅ **Personaje Interactivo**: Genera diálogos diferentes al hacer clic
- ✅ **Multi-página**: Inicio, Proyectos, Sobre mí
- ✅ **Responsive Design**: Funciona en móvil, tablet y desktop
- ✅ **Enlaces Externos**: GitHub y Twitter/X

## 🚀 Inicio Rápido

### 1. Instalación
No hay instalación necesaria. Es HTML5 puro. Solo necesitas:
- Un navegador moderno (Chrome, Firefox, Safari, Edge)
- Los archivos del proyecto

### 2. Abrir la web
Simplemente abre `index.html` en tu navegador:
```bash
# En Windows
start index.html

# En Linux/Mac
open index.html
# o
firefox index.html
```

### 3. (Opcional) Usar un servidor local
Para mejor compatibilidad (especialmente si usas ciertas características):
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (http-server)
npx http-server
```

Luego abre: `http://localhost:8000`

## ⚙️ Configuración

Edita `js/config.js` para personalizar:

### Cambiar Enlaces Externos
```javascript
links: {
  github: 'https://tu-github.com/usuario',
  twitter: 'https://x.com/tu_usuario'
}
```

### Cambiar Frases del Personaje
```javascript
dialogues: [
  '> Tu frase aquí',
  '> Otra frase',
  // ...
]
```

### Agregar Tu GIF
1. Coloca tu GIF en `/assets/gif/`
2. Cambia la ruta en `config.js`:
```javascript
character: {
  gifPath: './assets/gif/tu-personaje.gif',
  altText: 'Tu descripción'
}
```

Si no tienes un GIF, la web mostrará un placeholder emoji.

### Editar Información Personal
```javascript
personal: {
  name: 'Tu Nombre',
  bio: 'Tu descripción',
  presentation: 'Tu presentación personal'
}
```

### Agregar/Editar Tecnologías
```javascript
technologies: {
  languages: [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Tu Lenguaje', icon: '🎯' }
  ],
  // ...
}
```

## 📱 Responsive Design

| Dispositivo | Ancho | Ajustes |
|-------------|-------|---------|
| Móvil | < 768px | Stack vertical, efectos reducidos |
| Tablet | 768-1024px | Layout flexible |
| Desktop | > 1024px | Experiencia completa |

## 🎮 Cómo Usar

### Página Principal
- Botones principales para navegar
- Haz clic en el personaje para ver diálogos
- Enlaces directos a GitHub y Twitter

### Sección "Sobre Mí"
- **CANAL 1**: Presentación personal
- **CANAL 2**: Tecnologías (con subcanales)
  - 2a: Lenguajes
  - 2b: Frameworks
  - 2c: DevOps
- **CANAL 3**: Aplicaciones que usas

**Controles:**
- `◀ PREV`: Canal anterior
- `NEXT ▶`: Canal siguiente
- `# INPUT`: Ir a un canal específico (ingresa número)

### Sección "Proyectos"
- Por ahora es un placeholder
- Edita `proyectos.html` para agregar tus proyectos

## 🛠️ Personalización Avanzada

### Cambiar Colores
En `css/main.css`, edita las variables:
```css
:root {
  --color-primary: #00ff00;      /* Verde neón */
  --color-secondary: #00ffff;    /* Cian */
  --color-tertiary: #ffffff;     /* Blanco */
  --color-bg: #0a0a0a;           /* Negro profundo */
  --color-accent: #ff00ff;       /* Magenta */
}
```

### Cambiar Tipografía
Por defecto usa "VT323" (fuente monoespaciada retro).
Para cambiarla, modifica en `css/main.css`:
```css
--font-mono: 'Tu Fuente', monospace;
```

### Agregar Sonidos (Opcional)
Crea `js/sounds.js` y agrega efectos de sonido al cambiar canales, etc.

## 🌐 Desplegar

### GitHub Pages
1. Crea un repositorio: `tu-usuario.github.io`
2. Súbe los archivos
3. Accede en: `https://tu-usuario.github.io`

### Alternativas
- **Netlify**: Deploy automático desde GitHub
- **Vercel**: Similar a Netlify
- **Surge.sh**: Deploy simple desde terminal

## 🐛 Troubleshooting

### El GIF no se muestra
- Verifica que la ruta sea correcta
- Usa formatos soportados: `.gif`, `.webp`, `.png`
- Comprueba la consola (F12) para errores

### Efectos demasiado intensos
- En móvil, los efectos se reducen automáticamente
- Edita `css/main.css` para ajustar opacidad

### Botones no funcionan
- Asegúrate de que todos los archivos `.js` están en su lugar
- Abre la consola (F12) para ver errores
- Recarga la página (Ctrl+Shift+R)

## 📚 Referencias Visuales

- **Anime**: Serial Experiments Lain (1998)
- **Estética**: CRT Monitor, Y2K, Geocities
- **Tipografía**: VT323 (terminal retro)
- **Colores**: Paleta neón verde/cian sobre fondo negro

## 📄 Licencia

Libre para usar y modificar. Si lo usas, menciona la inspiración en Lain. 🤍

## 🎯 Próximas Mejoras

- [ ] Sonido de estático al cambiar canales
- [ ] Efecto de "encendido" de TV al cargar
- [ ] Easter eggs ocultos
- [ ] Modo sin efectos para accesibilidad
- [ ] Sección de contacto
- [ ] Cursor personalizado (pixel cursor)

## 💬 Contacto

¿Preguntas o sugerencias? Edita las URLs de GitHub y Twitter en `config.js`.

---

**Made with 🖤 and Y2K vibes**
# porfolio
