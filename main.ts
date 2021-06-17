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
function turn_right () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, forward_right_speed)
    basic.pause(spin_time - 70)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
let forward_left_speed = 0
let forward_right_speed = 0
let spin = 0
let spin_time = 0
basic.showIcon(IconNames.Duck)
spin_time = 260
spin = 140
forward_right_speed = 210
forward_left_speed = 255
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
basic.forever(function () {
	
})
