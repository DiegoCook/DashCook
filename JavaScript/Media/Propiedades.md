# Propiedades de MediaElement

## <span id="paused" style="color: red"> HTMLMediaElement.paused

---

La propiedad `HTMLMediaElement.paused` es solo de lectura, indica si el elemento multimedia está en pausa.

```javascript
let video = document.getElementById('videoUno')
video.paused // return: true

function playVideo() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}
```

[Enlace a MDN - HTMLMediaElement.paused](v)

[Enlacd a w3school - HTML Audio/Video DOM paused Property](https://www.w3schools.com/tags/av_prop_paused.asp)

<br>

## <span id="muted" style="color: red"> HTMLMediaElement.muted

---

`HTMLMediaElement.muted` indica si el elemento multimedia está silenciado.

```javascript
document.getElementById("myVideo").muted // retorna true;
```

[Enlace a MDN - HTMLMediaElement.muted](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted)

[Enlace a w3school - Video muted Property](https://www.w3schools.com/jsref/prop_video_muted.asp)
