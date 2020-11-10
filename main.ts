basic.forever(function () {
    for (let I = 0; I <= 2; I++) {
        led.plot(2 + I, 2)
        led.plot(2 - I, 2)
        led.plot(2, 2 + I)
        led.plot(2, 2 - I)
        basic.pause(100)
    }
    for (let I = 0; I <= 2; I++) {
        led.unplot(2 + (2 - I), 2)
        led.unplot(2 - (2 - I), 2)
        led.unplot(2, 2 + (2 - I))
        led.unplot(2, 2 - (2 - I))
        basic.pause(100)
    }
})
