# <span id="inicio"> Métodos de HTMLMediaElement

## ÍNDICE

[pause ( )](#pause)

[play ( )](#play)

<br>

---

## <span id="pause" style="color: red">play( )

---

El método `play()` de `HTMLMediaElement` intenta comenzar la reproducción de los medios. Devuelve una promesa (`Promise`) que se resuelve cuando la reproducción se ha iniciado con éxito. Si no se inicia la reproducción por cualquier motivo, como problemas de permisos, la promesa será rechazada.

```javascript
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.className = "playing";
  } catch(err) {
    playButton.className = "";
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.className = "";
  }
}
```

[Enlace a MDN - HTMLMediaElement.play()](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement/play)

[Enlace a w3school - Video play() Method](https://www.w3schools.com/jsref/met_video_play.asp)

<br>

## <span id="pause" style="color: red">pause ()

---

El método pausará la reproducción de los medios, pero si los medios ya están en pausa, este método no tendrá efecto.

[Enlace a MDN - HTMLMediaElement.pause()](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement/pause)

[Enlace a w3school - Video play() Method](https://www.w3schools.com/jsref/met_video_play.asp)
