# Stüssy E-Commerce

Este es un proyecto de e-commerce desarrollado con **React, Firebase y React Router**. Permite a los usuarios registrarse, iniciar sesión y agregar productos a su carrito de compras.

---

##  Tecnologías utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router** - Manejo de rutas dentro de la aplicación.
- **Firebase** - Autenticación y base de datos en tiempo real.
- **TypeScript** - Tipado estático para mayor seguridad en el código.
- **Tailwind CSS** - Framework de CSS para diseño moderno y responsivo.
- **Vite** - Entorno de desarrollo rápido para aplicaciones modernas.

---

##  Requisitos previos

Antes de instalar, asegúrate de tener instalado:

- **Node.js** (16 o superior) → [Descargar aquí](https://nodejs.org/)
- **Git** → [Descargar aquí](https://git-scm.com/)

---

##  Instalación

### 1️ Clonar el repositorio

```sh
git clone https://github.com/tu-usuario/tu-repositorio.git
cd nombre-del-proyecto
```

### 2️ Instalar dependencias

```sh
npm install
```

---

##  Configuración de Firebase

1️ Crea un proyecto en **[Firebase Console](https://console.firebase.google.com/)**.  
2️ Habilita **Autenticación con correo y contraseña** en la sección de Authentication.  
3️ Configura Firestore si deseas almacenar productos.  
4️ Copia la configuración de Firebase desde "Configuración del proyecto" > "SDK de configuración".  
5️ Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

---

##  Ejecutar la aplicación

Para iniciar el servidor de desarrollo:

```sh
npm run dev
```

Esto ejecutará la aplicación en **http://localhost:5173/**.

Para generar una versión de producción:

```sh
npm run build
```

---

##  Licencia

Este proyecto está bajo la licencia **MIT**.

Si tienes dudas o mejoras, abre un **issue** o un **pull request** en GitHub.
