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

Score = 0
basic.show_string("Hello dante!")

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global Score
    if input.button_is_pressed(Button.A):
        Score += 1
        if 10 < Score:
            basic.show_string("You won")
basic.forever(on_forever2)

def on_in_background():
    basic.show_icon(IconNames.YES)
control.in_background(on_in_background)

game.create_sprite(2, 2)