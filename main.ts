let current_tempurature = 0
basic.forever(function () {
    current_tempurature = input.temperature()
    basic.showNumber(current_tempurature)
    basic.pause(1000)
    basic.clearScreen()
})
