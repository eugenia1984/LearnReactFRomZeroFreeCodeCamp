# :book:  Aprende react desde Cero - Curso de React con proyectos - FreeCodeCamp

---

[Aca esta la lista de reproduccion de YouTube](https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=2s)

---

## :start: Teoría

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

- puede recibir valores si es necesario

Ejemplo:

```JavaScript
function Saludos(props) {
   return <h1> Hola, {props.nombre}!</h1>;
}
```

... *de clase*, se utilizan en las primeras versiones.


---

