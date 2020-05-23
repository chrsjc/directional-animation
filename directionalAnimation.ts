

enum ActionKind {
    Left,
    Right,
    Up,
    Down
}

function createAnimation(sprite: Sprite, mouthClosed: Image, mouthOpen: Image) {
    direction = ActionKind.Right

    let rightAnim: animation.Animation = animation.createAnimation(ActionKind.Right, 200)
    rightAnim.addAnimationFrame(mouthClosed)
    rightAnim.addAnimationFrame(mouthOpen)
    let leftAnim: animation.Animation = animation.createAnimation(ActionKind.Left, 200)
    leftAnim.addAnimationFrame(mouthClosed.rotated(180))
    leftAnim.addAnimationFrame(mouthOpen.rotated(180))
    let upAnim: animation.Animation = animation.createAnimation(ActionKind.Up, 200)
    upAnim.addAnimationFrame(mouthClosed.rotated(-90))
    upAnim.addAnimationFrame(mouthOpen.rotated(-90))
    let downAnim: animation.Animation = animation.createAnimation(ActionKind.Down, 200)
    downAnim.addAnimationFrame(mouthClosed.rotated(90))
    downAnim.addAnimationFrame(mouthOpen.rotated(90))
    animation.attachAnimation(sprite, upAnim)
    animation.attachAnimation(sprite, downAnim)
    animation.attachAnimation(sprite, leftAnim)
    animation.attachAnimation(sprite, rightAnim)
    animation.setAction(sprite, ActionKind.Right)
}

function updateSpriteDirection(sprite: Sprite, direction: ActionKind): ActionKind {
    if (sprite.vx > 0 && direction != ActionKind.Right) {
        direction = ActionKind.Right
        animation.setAction(sprite, ActionKind.Right)
    } else if (sprite.vx < 0 && direction != ActionKind.Left) {
        direction = ActionKind.Left
        animation.setAction(sprite, ActionKind.Left)
    } else if (sprite.vy > 0 && direction != ActionKind.Down) {
        direction = ActionKind.Down
        animation.setAction(sprite, ActionKind.Down)
    } else if (sprite.vy < 0 && direction != ActionKind.Up) {
        direction = ActionKind.Up
        animation.setAction(sprite, ActionKind.Up)
    }
    return direction
}
