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

### Componentes

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

---

### Estado

Representación en JS del conjunto de propiedades de un componentes y sus valores actuales.

---

