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
function R2D2 () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 74, 0, 9999, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
}
game.setScore(0)
game.resume()
basic.showString("Hello world!")
forever
game.createSprite(2, 2)
game.startCountdown(1000000)
8 * 8 + 5
basic.forever(function () {
    while (game.score() < 25) {
        R2D2()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        game.addScore(1)
        if (game.score() == 25) {
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
