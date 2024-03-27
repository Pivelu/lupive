basic.forever(function () {
    music.play(music.stringPlayable("C5 F C5 A A D E C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showString("ola me chamo lucas")
    basic.showIcon(IconNames.Heart)
    basic.showString("tenho 13 anos")
})
