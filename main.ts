enum ActionKind {
    Left,
    Right,
    Up,
    Down,
    Walking,
    Idle,
    Jumping
}
function createSprite () {
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
    createAnimation()
}
function createAnimation () {
    direction = ActionKind.Right
    mouthClosed = img`
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
    mouthOpen = img`
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
    rightAnim = animation.createAnimation(ActionKind.Right, 200)
    rightAnim.addAnimationFrame(mouthClosed)
    rightAnim.addAnimationFrame(mouthOpen)
    leftAnim = animation.createAnimation(ActionKind.Left, 200)
    leftAnim.addAnimationFrame(mouthClosed.rotated(180))
    leftAnim.addAnimationFrame(mouthOpen.rotated(180))
    upAnim = animation.createAnimation(ActionKind.Up, 200)
    upAnim.addAnimationFrame(mouthClosed.rotated(-90))
    upAnim.addAnimationFrame(mouthOpen.rotated(-90))
    downAnim = animation.createAnimation(ActionKind.Down, 200)
    downAnim.addAnimationFrame(mouthClosed.rotated(90))
    downAnim.addAnimationFrame(mouthOpen.rotated(90))
    animation.attachAnimation(mySprite, upAnim)
    animation.attachAnimation(mySprite, downAnim)
    animation.attachAnimation(mySprite, leftAnim)
    animation.attachAnimation(mySprite, rightAnim)
    animation.setAction(mySprite, ActionKind.Right)
}
let downAnim: animation.Animation = null
let upAnim: animation.Animation = null
let leftAnim: animation.Animation = null
let rightAnim: animation.Animation = null
let mouthOpen: Image = null
let mouthClosed: Image = null
let direction = 0
let mySprite: Sprite = null
createSprite()
game.onUpdateInterval(100, function () {
    if (mySprite.vx > 0 && direction != ActionKind.Right) {
        direction = ActionKind.Right
        animation.setAction(mySprite, ActionKind.Right)
    } else if (mySprite.vx < 0 && direction != ActionKind.Left) {
        direction = ActionKind.Left
        animation.setAction(mySprite, ActionKind.Left)
    } else if (mySprite.vy > 0 && direction != ActionKind.Down) {
        direction = ActionKind.Down
        animation.setAction(mySprite, ActionKind.Down)
    } else if (mySprite.vy < 0 && direction != ActionKind.Up) {
        direction = ActionKind.Up
        animation.setAction(mySprite, ActionKind.Up)
    }
})
