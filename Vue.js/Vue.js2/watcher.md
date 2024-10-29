# watcher

Podemos observar la propiedad de un `objeto` utilizando `watcher string`.

```javascript
data () {
  return {
    obj: {
      prop: true,
      porp1: 1
    }
  }
},
watch: {
  "obj.prop" (value, oldValue) {
    console.log(value, oldValue)
  }
}
```

En caso de que no sepamos que propiedad queremos escuchar, o que querramos escuchar mñas de una propiedad de un objeto, entonces utilizamos el método `handler()`.

```javascript
data () {
  return {
    obj: {
      prop: true,
      porp1: 1
    }
  }
},
watch: {
  obj: {
    handler (value, oldValue) {
      console.log(value, oldValue)
    },
    deep: true
  }
}
```
