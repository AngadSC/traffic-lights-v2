if (pins.digitalReadPin(DigitalPin.P16) == 1 && input.pinIsPressed(TouchPin.P0)) {
    pins.digitalWritePin(DigitalPin.P1, 1)
} else {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(5000)
})
