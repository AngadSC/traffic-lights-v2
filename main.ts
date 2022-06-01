let trigger = 0
function zero () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function one () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function clear_screen () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function three () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function five () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function four () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function two () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
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
    if (trigger == 1 && input.pinIsPressed(TouchPin.P0)) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        control.waitMicros(5000)
    }
    if (trigger == 0) {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
