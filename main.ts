controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Facing_right) {
        animation.runImageAnimation(
        Hero,
        assets.animation`myAnim1`,
        100,
        false
        )
    }
    if (Facing_left) {
        animation.runImageAnimation(
        Hero,
        assets.animation`myAnim2`,
        100,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    assets.animation`myAnim0`,
    100,
    true
    )
    Facing_right = false
    Facing_left = true
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
    Hero.setImage(assets.image`myImage0`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
    Hero.setImage(assets.image`myImage0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    assets.animation`myAnim`,
    100,
    true
    )
    Facing_right = true
    Facing_left = false
})
let Facing_left = false
let Facing_right = false
let Hero: Sprite = null
Hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Hero, 100, 0)
