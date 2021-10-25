const mapLetterToUrl = new Map([
    ['A', 'sounds/white-keys/A.mp3/'],
    ['S', 'sounds/white-keys/S.mp3/'],
    ['D', 'sounds/white-keys/D.mp3/'],
    ['F', 'sounds/white-keys/F.mp3/'],
    ['G', 'sounds/white-keys/G.mp3/'],
    ['H', 'sounds/white-keys/H.mp3/'],
    ['J', 'sounds/white-keys/J.mp3/'],
    ['W', 'sounds/black_keys/W.mp3'],
    ['E', 'sounds/black_keys/E.mp3'],
    ['T', 'sounds/black_keys/T.mp3'],
    ['Y', 'sounds/black_keys/Y.mp3'],
    ['U', 'sounds/black_keys/U.mp3'],
])

document.addEventListener('keydown', ev => {
    const url = mapLetterToUrl.get(ev.key.toUpperCase())
    if (url) {
        const sound = new Audio(url)
        sound.play()
    } else {
        console.warn('Wrong key')
    }
})