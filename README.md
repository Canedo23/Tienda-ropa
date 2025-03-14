
# 🛒 Stüssy E-Commerce

Este es un proyecto de e-commerce basado en **React, Firebase y React Router**. Permite a los usuarios registrarse, iniciar sesión y agregar productos a su carrito, que se guarda de manera independiente para cada usuario.


##  Tecnologías utilizadas

- **React** - Framework para la interfaz de usuario.
- **React Router** - Para la navegación entre páginas.
- **Firebase** - Autenticación y almacenamiento de datos.
- **TypeScript** - Para un desarrollo más seguro y estructurado.
- **Tailwind CSS** - Para el diseño y estilos.
- **Vite** - Para un desarrollo rápido de la aplicación.


##  Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) → [Descargar aquí](https://nodejs.org/)
- **Git** (para clonar el repositorio) → [Descargar aquí](https://git-scm.com/)


## Instalación y configuración

### 1 Clonar el repositorio

```sh
git clone https://github.com/Canedo23/Tienda-ropa.git
```

```sh
cd nombre-del-proyecto
```

### 2 Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```sh
npm install
```

## Configuración de Firebase

Este proyecto usa **Firebase** para la autenticación y gestión de datos.

### 1 Crear un proyecto en Firebase

- Accede a [Firebase Console](https://console.firebase.google.com/).
- Crea un nuevo proyecto y configura una aplicación web.

### 2 Habilitar autenticación con correo y contraseña

- En Firebase, ve a **Authentication** > **Métodos de inicio de sesión**.
- Activa la opción **Correo y contraseña**.

### 3 Configurar Firestore (opcional, si almacenas productos)

- En Firebase, ve a **Firestore Database** y crea una base de datos en modo prueba.

### 4 Obtener las credenciales del proyecto

- En Firebase, ve a **Configuración del proyecto** > **Tus apps** > **SDK de configuración**.
- Copia la configuración de Firebase.

### 5 Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

##  Ejecutar la aplicación

Para iniciar el servidor de desarrollo, usa:

```sh
npm run dev
```

Esto ejecutará la aplicación en **http://localhost:5173/**.

Si deseas generar una versión optimizada para producción, ejecuta:

```sh
npm run build
```

Esto creará una carpeta `dist/` con los archivos listos para ser desplegados.


## Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.


¡Gracias por visitar este E-Commerce sobre Stüssy!  Si tienes dudas o mejoras, abre un **issue** o un **pull request** en GitHub.  
```
