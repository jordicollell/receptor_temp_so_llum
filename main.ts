function so2 () {
    if (so < 100) {
        OLED12864_I2C.showString(
        10,
        1,
        " ",
        1
        )
    }
    if (so < 10) {
        OLED12864_I2C.showString(
        9,
        1,
        " ",
        1
        )
    }
    serial.writeValue("so", so)
    OLED12864_I2C.showString(
    0,
    1,
    "so: ",
    1
    )
    OLED12864_I2C.showNumber(
    8,
    1,
    so,
    1
    )
}
function llum2 () {
    if (llum < 100) {
        OLED12864_I2C.showString(
        10,
        2,
        " ",
        1
        )
    }
    if (llum < 10) {
        OLED12864_I2C.showString(
        9,
        2,
        " ",
        1
        )
    }
    OLED12864_I2C.showString(
    0,
    2,
    "lum:",
    1
    )
    OLED12864_I2C.showNumber(
    8,
    2,
    llum,
    1
    )
}
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        temperatura = value
    }
    if (name == "so") {
        so = value
    }
    if (name == "llum") {
        llum = value
    }
})
function temperatura2 () {
    if (temperatura < 100) {
        OLED12864_I2C.showString(
        10,
        0,
        " ",
        1
        )
    }
    if (temperatura < 10) {
        OLED12864_I2C.showString(
        9,
        0,
        " ",
        1
        )
    }
    OLED12864_I2C.showString(
    0,
    0,
    "temp",
    1
    )
    OLED12864_I2C.showNumber(
    8,
    0,
    temperatura,
    1
    )
}
let temperatura = 0
let llum = 0
let so = 0
radio.setGroup(1)
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
basic.forever(function () {
    llum2()
    so2()
    temperatura2()
})
