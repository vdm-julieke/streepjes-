input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
