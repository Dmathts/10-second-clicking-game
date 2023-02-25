input.onButtonPressed(Button.AB, function () {
    music.playMelody("D E C5 A F B G C5 ", 120)
    basic.showLeds(`
        . . . . #
        . # . . .
        . . # . .
        # . . . .
        . . . # .
        `)
})
game.setScore(0)
game.resume()
basic.showString("Hello dante!")
forever ;
game.createSprite(2, 2)
game.startCountdown(1000000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        game.addScore(1)
        if (25 < game.score()) {
            game.pause()
            basic.showString("You won")
            images.createBigImage(`
                . . # # . . # # . .
                . . # # . . # # . .
                # . . . . . . . . #
                # # # # # # # # # #
                . # # # # # # # # .
                `).showImage(0, 500)
        }
    }
})
control.inBackground(function () {
    basic.showIcon(IconNames.Yes)
})
8*8+5