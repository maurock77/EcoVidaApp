# 🌎 EcoVida

EcoVida es una aplicación móvil híbrida desarrollada con Apache Cordova que tiene como objetivo promover hábitos sostenibles y la concienciación ambiental mediante herramientas interactivas orientadas a la educación ecológica y el seguimiento de actividades responsables con el medio ambiente.

<img width="300" height="auto" alt="Screenshot_20261108_174204" src="https://github.com/user-attachments/assets/a263c3e2-e0e3-40c4-8b11-93cd950c7105" />
<img width="300" height="auto" alt="Screenshot_20261108_174214" src="https://github.com/user-attachments/assets/d7daa609-e1d3-4ef9-b7e7-1cefdc4fb58b" />


## Características

- Gestión de perfil de usuario.
- Registro de actividades sostenibles.
- Seguimiento de metas ecológicas.
- Consejos ambientales aleatorios.
- Calculadora de impacto ambiental.
- Recursos educativos sobre sostenibilidad.
- Almacenamiento local mediante LocalStorage.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Apache Cordova
- Node.js
- Android SDK

## Estructura del proyecto

```text
EcoVidaApp
│
├── www
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── index.js
│   │   └── app.js
│   │
│   ├── img
│   │
│   └── index.html
│
├── config.xml
├── package.json
└── README.md
```
## Instalación
para ejecutar el proyecto **EcoVida**  en un entorno local es necesario contar previamente con **Node.js, Cordova y las herramientas de desarrollo para Android instaladas en el sistema**. A continuación, se describen los pasos necesarios para obtener el código fuente, instalar las dependencias y generar una versión ejecutable de la aplicación.

### Clonar repositorio
Obtiene una copia local del proyecto desde GitHub.
`` https://github.com/maurock77/EcoVidaApp.git ``

### Instalar dependencias
Accede al directorio del proyecto e instala las dependencias definitivas en el archivo package.json.
`` npm install ``

### Instalar Cordova
Sí Apache Cordova no se encuentra instalado globalmente en el equipo, puede instalarse mediante el siguiente comando:
`` npm install -g cordova ``

### Agregar plataforma Android
Añade el soporte para dispositivos Android dentro del proyecto.
`` cordova platform add android ``

### Ejecutar el proyecto
Permite desplegar la aplicación en un dispositivo Android conectado o en un emulador configurado.
`` cordova run android ``

### Generar apk
Compila el proyecto y genera el archivo instalable de Android.
`` cordova build android ``

### El archivo apk generado
Una vez finalizada la compilación, el archivo APK se encontrará normalmente en la siguiente ubicación:
`` platforms/android/app/build/outputs/apk/debug/ ``

## Descarga
la última versión compilada de la aplicación puede descargarse desde la sección **Releases** de este repositorio.  
Descargar APK v1.0.0:  
https://github.com/maurock77/EcoVidaApp/releases/tag/EcoVida.apk

## Objetivo académico
Este proyecto fue desarrollado como parte de la asignatura de Desarrollo de Aplicaciones Móviles, utilizando Apache Cordova para implementar una aplicación híbrida orientada a la sostenibilidad y educación ambiental.

## Autor
Desarrollado por Mauricio Henríquez Pérez.

## Licencia
Proyecto desarrollado con fines académicos.

