enum ActionKind {
    Left,
    Right,
    Up,
    Down,
    Walking,
    Idle,
    Jumping
}
let mouthClosed = (img`
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
`)
let mouthOpen = (img`
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
`)
let mySprite = sprites.create(img`
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
let direction: ActionKind = ActionKind.Right
controller.moveSprite(mySprite)
let rAnim = animation.createAnimation(ActionKind.Right, 1000)
rAnim.addAnimationFrame(mouthClosed)
rAnim.addAnimationFrame(mouthOpen)
let lAnim = animation.createAnimation(ActionKind.Left, 1000)
lAnim.addAnimationFrame(mouthClosed.rotated(180))
lAnim.addAnimationFrame(mouthOpen.rotated(180))
let uAnim = animation.createAnimation(ActionKind.Up, 1000)
uAnim.addAnimationFrame(mouthClosed.rotated(-90))
uAnim.addAnimationFrame(mouthOpen.rotated(-90))
let dAnim = animation.createAnimation(ActionKind.Down, 1000)
dAnim.addAnimationFrame(mouthClosed.rotated(90))
dAnim.addAnimationFrame(mouthOpen.rotated(90))
animation.attachAnimation(mySprite, uAnim)
animation.attachAnimation(mySprite, dAnim)
animation.attachAnimation(mySprite, lAnim)
animation.attachAnimation(mySprite, rAnim)
animation.setAction(mySprite, ActionKind.Right)
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
