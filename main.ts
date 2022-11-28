input.onButtonPressed(Button.A, function () {
    if (mod == 0) {
        numar += 1
    } else {
        bate_inima(numar)
    }
})
input.onButtonPressed(Button.AB, function () {
    afiseaza_an(numar, 500)
})
function afiseaza_an (ani: number, pauza: number) {
    an_nastere = 2022 - ani
    basic.showNumber(an_nastere)
    for (let index = 0; index < ani; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(pauza)
    }
}
input.onButtonPressed(Button.B, function () {
    afiseaza_an(numar, 200)
})
function bate_inima (nr: number) {
    for (let index = 0; index < nr; index++) {
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (mod == 0) {
        mod = 1
    } else {
        mod = 0
        numar = 0
    }
    basic.showString("Modul este " + mod)
})
let an_nastere = 0
let numar = 0
let mod = 0
basic.showIcon(IconNames.Yes)
mod = 0
