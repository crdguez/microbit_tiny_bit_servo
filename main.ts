input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(44)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
})
servos.P1.setAngle(0)
basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
Tinybit.Music_Car(Tinybit.enMusic.birthday)
basic.forever(function () {
	
})
