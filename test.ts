// tests go here; this will not be compiled when this package is used as an extension.

function createSprite() {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 0)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(mySprite)
    createAnimation(mySprite, mouthClosed, mouthOpen)
}



let direction = 0
let mySprite: Sprite = null

let mouthClosed: Image = img`
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 . . . . . . .
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . . . 5 5 5 5 5 5 5 5 5 5 5 . .
    . . . . . 5 5 5 5 5 5 5 . . . .
`
let mouthOpen: Image = img`
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 5 5 5 5 . . .
    . 5 5 5 5 5 5 5 5 5 5 5 . . . .
    . 5 5 5 5 5 5 5 5 5 5 . . . . .
    . 5 5 5 5 5 5 5 5 5 . . . . . .
    . 5 5 5 5 5 5 5 5 . . . . . . .
    . 5 5 5 5 5 5 5 5 5 . . . . . .
    . 5 5 5 5 5 5 5 5 5 5 . . . . .
    . 5 5 5 5 5 5 5 5 5 5 5 . . . .
    . . 5 5 5 5 5 5 5 5 5 5 5 . . .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . . 5 5 5 5 5 5 5 5 5 5 5 . .
    . . . . . 5 5 5 5 5 5 5 . . . .
`
createSprite()
game.onUpdateInterval(100, function () {
    direction = updateSpriteDirection(mySprite, direction)
})


