# Constantes

```js
<script>
export default {
  name: 'App',
  PRECIO: 500,
  data(){
    return{
      cantidad: 0
    }
  },
  computed:{
    valorTotal(){
      return this.$options.PRECIO * this.cantidad;
    }
  }
}
</script>
```
