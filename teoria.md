# :book:  Aprende react desde Cero - Curso de React con proyectos - FreeCodeCamp

---

[Aca esta la lista de reproduccion de YouTube](https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2s)

---

## :star: Teoría

---

### React

Es una **biblioteca** de JS de código abierto diseñada para crear interfaces de usuario (**UI**).

*biblioteca* -> conjunto de implementaciones o subprogramas que podemos usar en nuestro código, es decir, son herramientas que otras desarrolladores ya crearon y las podemos usar para crear una applicación web.

Ventajas...

... fácil de aprender y usar (sabiendo HTML, CSS y JS)

... componentes reutilizables

... crear aplicaciones dinámicas

... buen desempeño.


---
---


#### :star: Conceptos:

- Componentes

- Estado

- Hooks

- Event Listener

---

#### Componentes

*componente* -> parte de la interfaz de usuario que es independiente (cada componente tiene un estado y una funcionalidad específica)  y reusable (el mismo componente se define una vez y puede ser utilizado varias vaces).

Componente...

... *Funcionales*, es una función de JS/ES6 que retorna un elemento de React (JSX). Sus características:

- debe retornar un elemento de React (JSX)

- debe comenzar con una letra mayúscula

- puede recibir valores si es necesario, es React se llaman *props* (properties), son argumentos que puede recibir un componente de React (son similar a los argumentos que recibe una funcion al ser invocada en JS). En React ciertos componentes van a generar otros componentes, para crear la estructura, y podemos personalizar propiedades(caracteristicas) con las props. **Los props solo pueden ser enviados de padres a hijos**, no e sun intercambio bidireccional.

Ejemplo, props es como un objeto, por eso con *dot notation* utilizo su propiedad:

```JavaScript
function Saludo(props) {
   return <h1> Hola, {props.nombre}!</h1>;
}
```

... *de clase*, se utilizan en las primeras versiones. Es una clase de ES5 que retorna un elemento JSX. Sus caracterñisticas:

- debe extender **React.Component**

- debe tener un método **render()** para retornar un elemento de JSX, definira que va a mostrar ese componente.

- Puede recibir valores si es necesario.


Ejemplo, utilizando la palabra reservada *class*, el *nombre del componente* el cual va a extender (heredar) de *React.Component* para poder utilizar le método *render()*.

AL utulizar la clase se debe utilizar **this** con las props:

```JavaScript
class Saludo extenss React.Component {
   render() {
       return <h1> Hola, {this.props.nombre}!</h1>;
   }
}
```

#### Hooks

¿Por qué tener dos tipos de componentes ?

Anteriormente usábamos componentes de *clase* para poder trabajar con *estados* de nuestros componentes. En versiones anteriores a la 16.8 de REact no podíamos hacerlo en *componentes funcionales*.

Llegaron los **hooks** y nos permiten agregar estados a los *componentes funcionales*. Ahora sí podemos asignar y actualizar el estado de un componente funcional en React con los hooks.

---

#### Estado

Representación en JS del conjunto de propiedades de un componentes y sus valores actuales.

*hook* -> función especial que te permite trabajar con estados en componentes funcionales y otros espectos de React. Sin escribir un componente de clase. Esto nos permite escribir código mucho más conciso y fácil de entender.

---

#### Event Listener (Event Handler)

Función en JS que es ejecutada cuando ocurre un evento específico.


---
---


### :star: ¿ Que se necesita tener para armar una app en React ?

- Node.js, el entorno de ejecución para JS construido con el V8, motor de JS de Chrome; lo que nos permite ejecutar JS fuera de un browser.


---
---

### :star: JSX

JSX es una extensión de React para la sintaxis de JS.

Nos permite describir en JS cómo se verán los componentes usando una estructura similar a HTML.

Ventajas:

- estructura más fácil de visualizar

- errores y advertencias más útiles

JSX es *opcional*, pero es recomendado.

Ejemplo en codigo:

```JavaScript
const elemento = <h1>Hola, mundo!</h1>;
```



- Con JSX podes crear y usar cualquier elemento HTML, coo por ejemplo: ```<div>```, ```<img>```, ```<a>```, ```<header>```, ```<nav>```, ```<p>```, ```<h1>```, ```<button>```, ```<footer>```, ```<h2>```


- ¿Cómo reconozco un *elemento* de un *componente*? 

En JSX, los elementos HTML se representan con etiquetas en letras minúsculas.

En JSX; los componentes comienzan con una letra mayúscula, por ejemplo ```<Boton />```

- En JSX puedo designar **atributos** a los elementos, para especificar ciertas caracterñisticas, se pueden agregar clases, estilos y id, entre otros, pero.. algunos atributos se escribien de distinta forma a HTML, como:

-> **className**. **class** es una palabra reservada en JS para crear una clase, por eso en JSX debe escribirse distinto.


-> **htmlFor**

-> el atributo **style** acepta un objeto JS con propiedades CSS escritas en camelCase, por ejemplo en CSS *background-image* y en JSX *bakgroundImage*, por ejemplo:

```JavaScript
const estiloDiv = {
  color: 'yellow',
  backgroundColor: 'black'
};
```

Y en el elemento:

```JavaScript
<div style={estiloDiv}>Hola Mundo!</div>
```

-> Las **{}** en JSX indica que lo que está adentro es **JS**.

Otro modo, para asignar un estilo especifico en linea, cuando hay pocas propiedades:

```JvaScript
<div style={{color: 'yellow'}}>Hola Mundo</div<
```

-> Se usan llaves dobles , las de afuera indican que adentro ira **JS** y las de adentro son para definir un *elemento de JS*

[Lista de atributos del Dom reconocidos por React](https://reactjs.org/docs/dom-elements.html)

---
---

### :star: Elemento

Los *elementos* son las unidades más pequeñas en React. Definen lo que se ve en la pantalla.


**Elementos vs. Componentes**

- Los componentes en React están hechos de elementos.

- Los elementos son más básicos que los componentes.

- Los elementos son las unidades básicas.


---

### ¿ Cómo muestro el componente ?


Voy a tener un archivo HTML, con:

```HTML
<div id="root"></div>
```

**root** es el elemento principal que contiene a toda la aplicación. Este prodceso de inserción de la aplicación está manejado por *ReactDOM*


### :star: ReactDOM

Paquete que facilita la interacción y actualización del **DOM** (Document Object Model: representación en el navegador de todos lso elementos que conforman una página o aplicación web) en aplicaicones React.


---
---

### :star: Estructura de un componente con elmentos anidados

Al igual que en HTML, los elementos pueden ser **anidados** en JSX para formar estructuras más complejas.


---
---

### :star: Cómo renderizar componentes y elementos

En la app voy a tenr un archivo *html* que va a tener un **div** con el *id* **root** y será el contenedor principal:

```html
<div id="root"></div>
```

Y en los archivos **.js** voy a ir teniendo mis componentes y elementos.

Por ejemplo:

```JavaScript
const elemento = <h1>Hola Mundo</h1>;

ReactDOM.render(
   elemento,
   document.getElementById('root')
);
```

*elemento* -> elemento a renderizar

*document.getElementById('root')* -> contenedor para el elemento

Dentro del div con ID *root* se va a renderizar el h1 *Hola Mundo*.

Pero, para poder utilizar el método render() primero tengo que importar el paquete react-dom:
```JavaScript
import ReactDOM from 'react-dom';
```


---
---

### :star: Self closing tags

---
---

### :star: Insertar JS en JSX

---
---
