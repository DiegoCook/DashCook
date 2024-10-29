# nextTick()

[How to Use nextTick() in Vue](https://dmitripavlutin.com/vue-next-tick/)

[What the Tick is Vue.nextTick?](https://vuejsdevelopers.com/2019/01/22/vue-what-is-next-tick/)

Este método de Vue.js recibe 2 parámetos: `callback` y `context`.

```js
// Utilizandolo con un callback
const handleClick = () => {
  this.show = !this.show
  this.nextTick(() => {
    console.log(show)
  })
}
```

Como es una promesa también se puede utilizarn con `async` `await`, evitado el callback.

```js
async mounted () {
    this.message = 'updated'
    console.log(this.$el.textContent) // 'not updated'
    await this.$nextTick()
    console.log(this.$el.textContent) // 'updated'
}
```
