# provide / inject

Permite enviar informción del amponente padre a un componente descendiente que no es el hijo (nieto, bisnieto, etc). No es una función reactiva excepto que se utilice la siguinete sintaxis en el componente padre:

```javascript
data () {
  return {
    obj: {
      prop: 1,
      prop1: 2
    }
  }
},
provide () {
  const dataComp = {}

  Object.defineProperty(dataComp, 'obj', {
    enumerable: true,
    get: () => this.obj
  })
  return { dataComp }
}
```

En el componente descendiente se escribe:

```javascript
inject: ['dataComp']
```
