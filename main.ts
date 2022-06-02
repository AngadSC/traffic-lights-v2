let trigger = 0
function zero () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P5, 0)
}
function one () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P5, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}
function clear_screen () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P5, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function three () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P5, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function five () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P5, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
}
function four () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P5, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
}
function two () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P5, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P13, 0)
}
basic.forever(function () {
    if (trigger == 1 && input.pinIsPressed(TouchPin.P0)) {
        clear_screen()
        four()
        basic.pause(1000)
        three()
        basic.pause(1000)
        two()
        basic.pause(1000)
        one()
        basic.pause(1000)
        zero()
        basic.pause(1000)
    }
    if (trigger == 0) {
        clear_screen()
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P11, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    trigger = 0
    basic.pause(4000)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P11, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
    trigger = 0
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.analogWritePin(AnalogPin.P11, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    trigger = 1
    basic.pause(5000)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
