const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input")

const checkKey = document.querySelector(".keys-check input")

let audio = new Audio("src/audios/a.wav");

let mapedKeys = [];

const playTune = (key) => {
    // mudando o caminho do new Audio()
    audio.src = `src/audios/${key}.wav`
    // tocando a musica
    audio.play()
    // pegando o elemento HTML que tem o "data-key"
    const pressKey = document.querySelector(`[data-key="${key}"]`)
    // Criando a classe .active no elemento HTML
    pressKey.classList.add("active")
    // Removento a classe .active no elemeto HTML depois de 150 milisegundos
    setTimeout(() => {pressKey.classList.remove("active")}, 150)

}

pianoKeys.forEach((tecla) => {
    
    // dataset = está acessando a variavel criada no documento HTML
    //key = é o nome da variavel que foi criada
    // .addEventListener() é propriedade que faz com quer o JS fica escutando um evento
    // no caso irar escutar o evento de "click"
    // e chamar a função playTune logo em seguida
    tecla.addEventListener("click", () => {playTune(tecla.dataset.key)})
    
    mapedKeys.push(tecla.dataset.key)
})

// pegando um evento de quando aperta alguma tecla do documento HTML
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)) {
    // "e" é o evento feito 
    // .key = está capiturando o valor Key: do evento "e"
    // acionado a função playTune() com o evento "e" sendo passsado o valor .key
        playTune(e.key)
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}

// Pegando quando manipular o input do Volume
volumeSlider.addEventListener("input", handleVolume)

const showHideKeys = (e) => {
    // a propriedade .toggle() serve para quando não tiver adicionar, e quando tiver remover
    pianoKeys.forEach(key => (key.classList.toggle("hide")))
}

checkKey.addEventListener("click", showHideKeys)

