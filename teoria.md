# :book:  Aprende react desde Cero - Curso de React con proyectos - FreeCodeCamp

---

[Aca esta la lista de reproduccion de YouTube](https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2s)

---

## :star: Teoría

**React** es una **biblioteca** de JS de código abierto diseñada para crear interfaces de usuario (**UI**).

*biblioteca* -> conjunto de implementaciones o subprogramas que podemos usar en nuestro código, es decir, son herramientas que otras desarrolladores ya crearon y las podemos usar para crear una applicación web.

Ventajas...

... fácil de aprender y usar (sabiendo HTML, CSS y JS)

... componentes reutilizables

... crear aplicaciones dinámicas

... buen desempeño.

*componente* -> parte de la interfaz de usuario que es independiente (cada componente tiene un estado y una funcionalidad específica)  y reusable (el mismo componente se define una vez y puede ser utilizado varias vaces).

Componente...

... *Funcionales*, es una función de JS/ES6 que retorna un elemento de React (JSX). Sus características:

- debe retornar un elemento de React (JSX)

- debe comenzar con una letra mayúscula

- puede recibir valores si es necesario, es React se llaman *props* (properties), son argumentos que puede recibir un componente de React (son similar a los argumentos que recibe una funcion al ser invocada en JS). En React ciertos componentes van a generar otros componentes, para crear la estructura, y podemos personalizar propiedades(caracteristicas) con las props.

Ejemplo, props es como un objeto, por eso con *dot notation* utilizo su propiedad:

```JavaScript
function Saludos(props) {
   return <h1> Hola, {props.nombre}!</h1>;
}
```

... *de clase*, se utilizan en las primeras versiones.


---

