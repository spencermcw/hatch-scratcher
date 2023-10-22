import { sound } from '@pixi/sound'

export const audioFiles = {
    popclick: import.meta.env.BASE_URL + 'assets/sounds/popclick.wav',
    choice: import.meta.env.BASE_URL + 'assets/sounds/choice.wav',
    remove: import.meta.env.BASE_URL + 'assets/sounds/remove.wav',
    fairy: import.meta.env.BASE_URL + 'assets/sounds/fairy.wav',
    win: import.meta.env.BASE_URL + 'assets/sounds/win.wav',
}

Object.values(audioFiles).forEach(value => {
    sound.add(value, value)
})

export const playAudio = async (audioFile) => {
    sound.play(audioFile)
}
