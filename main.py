def on_button_pressed_ab():
    music.play_melody("D E C5 A F B G C5 ", 120)
    basic.show_leds("""
        . . . . #
                . # . . .
                . . # . .
                # . . . .
                . . . # .
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def R2D2():
    music.play_sound_effect(music.create_sound_effect(WaveShape.NOISE,
            5000,
            1,
            74,
            0,
            9999,
            SoundExpressionEffect.WARBLE,
            InterpolationCurve.CURVE),
        SoundExpressionPlayMode.IN_BACKGROUND)
game.set_score(0)
game.resume()
basic.show_string("Hello world!")
forever
game.create_sprite(2, 2)
game.start_countdown(1000000)
8 * 8 + 5

def on_forever():
    while game.score() < 25:
        R2D2()
basic.forever(on_forever)

def on_forever2():
    if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        game.add_score(1)
        if game.score() == 25:
            game.pause()
            basic.show_string("You won")
            images.create_big_image("""
                . . # # . . # # . .
                                . . # # . . # # . .
                                # . . . . . . . . #
                                # # # # # # # # # #
                                . # # # # # # # # .
            """).show_image(0, 500)
basic.forever(on_forever2)

def on_in_background():
    basic.show_icon(IconNames.YES)
control.in_background(on_in_background)
