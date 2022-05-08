# :book:  Aprende react desde Cero - Curso de React con proyectos - FreeCodeCamp

---

[Aca esta la lista de reproduccion de YouTube](https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2s)

---

## :star: Create React App

Desde **Visual Studio Code** abro la carpeta donde voy a crear el proyecto.

Y en la terminal,ya teniendo Node.js instalado:
```
npx create-react-app nombre-del-proyecto
```

si quiero crear la aplicacion dentor de la carpeta en al que ya estoy: ```npx create-react-app .```

Con ```npm start``` inicio el servidor de desarrollo.

Con ```npm build``` archivos estáticos para producción.

Con ```npm test``` comienza el test runner.

Con ```npm run eject``` remueve esta herramienta y copias de dependencias, los archivos de configuración y los script dentor dle directorio de la app. Esto no tiene rollover, una vez que se ejecuta no hay vuelta atras.

Para comenzar:
```
cd nombre-app
npm start
```

```cd``` -> change directory, para asi me situo dentro de mi app

Se va a abrir **localhost:3000**, la computadora trabaja como un servidor local que se ejecuta en el puerto 3000

---
---

### :star: Estructura de un proyecto

La estructura inicial es la siguiente:

```
>node_modules
>public
>src
.gitignore
package-lock.json
package.json
README.md
```

**node_modules** -> los modulos de node que se necesitan ejecutar para la aplicacion


**public** -> tiene el *favicon.ico*, el *index-html*, el *manifest.json* / *robots.txt* / *logo192.png* / *logo512.png* para hacerla PWA


**src** -> la carpeta *source*, vamos a guardar los archivos con codigo fuente de la aplicación, archivos **javascript** y **css**, también podemos incluir las imagenes o los recursos que necesitemos. Entre ellos está:

- **App.css** el estilo principal de la app, el fondo, el logo, la fuente, etc 

- **App.js** es un archivo JavaScript que crea un componente funcional App

- **App.test.js** para hacer pruebas (test), como en este curso no vamos a realizar pruebas, lo podemos eliminar

- **index.css** da el estilo a la aplicacion inicial, es un estilo por defecto

- **index.js** aplica el estilo de **index.css** y crea el componente de la aplicacion en modo estricto ```<React.StrictMode>```

- **logo.svg**

- **reportWebVitals.js**

- **setupTest.js** para configurar las test, este se puede eliminar ya que no haremos pruebas


**.gitignore**


**package-lock.json** -> información sobre la aplicación, como el nombre, la versión, las dependencias, paquetes, etc.


**package.json** -> información sobre la aplicación, como el nombre, la versión, etc.


**README.md** -> para describir el proyecto en markdown


---
---