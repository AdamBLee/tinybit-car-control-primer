function spin_right () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, spin, spin)
    basic.pause(spin_time)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
input.onButtonPressed(Button.A, function () {
    spin_right()
})
function turn_left () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, forward_left_speed)
    basic.pause(300)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
function spin_around () {
    spin_left()
    spin_left()
}
function drive_forward (time_milliseconds: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, forward_left_speed, forward_right_speed)
    basic.pause(time_milliseconds)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
input.onButtonPressed(Button.AB, function () {
    drive_forward(600)
    spin_left()
    drive_forward(600)
    spin_right()
    drive_forward(800)
    spin_right()
    spin_right()
})
input.onButtonPressed(Button.B, function () {
    spin_left()
})
function spin_left () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, spin, spin)
    basic.pause(spin_time)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
radio.onReceivedStringDeprecated(function (receivedString) {
    item = receivedString
    if (item.compare("stick_up") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    } else if (item.compare("stick_down") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (item.compare("stick_left") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    } else if (item.compare("stick_right") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    } else if (item.compare("stick_press") == 0) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (item.compare("button_red") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else if (item.compare("button_green") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    } else if (item.compare("button_blue") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    } else if (item.compare("button_yellow") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    } else {
    	
    }
})
function turn_right () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, forward_right_speed)
    basic.pause(spin_time - 70)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
let item = ""
let forward_left_speed = 0
let forward_right_speed = 0
let spin = 0
let spin_time = 0
let radio_group = 1
basic.showNumber(radio_group)
radio.setGroup(radio_group)
radio.setTransmitPower(7)
spin_time = 260
spin = 140
forward_right_speed = 210
forward_left_speed = 255
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
