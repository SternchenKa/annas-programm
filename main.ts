input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # #
        . . # # #
        . # . # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E F G A B C5 ", 81)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        . # . # .
        `)
})
