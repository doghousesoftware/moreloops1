input.onPinPressed(TouchPin.P0, function () {
    intVariable = 0
})
input.onButtonPressed(Button.A, function () {
    if (intVariable == 3) {
        basic.showString("True")
    } else if (intVariable == 0) {
        basic.showString("Hello!")
    } else {
        basic.showString("False")
    }
})
input.onButtonPressed(Button.B, function () {
    intVariable = 3
})
input.onPinPressed(TouchPin.P1, function () {
    intVariable = 99
})
let intVariable = 0
intVariable = 6
