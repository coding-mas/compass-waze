let accelerating_settings = 0
let directions = 0
led.unplot(-200, -140)
directions += input.acceleration(Dimension.X) * accelerating_settings
accelerating_settings += -2
while (true) {
    basic.showNumber(input.temperature())
}
basic.forever(function () {
	
})
