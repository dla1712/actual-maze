namespace SpriteKind {
    export const Tablet = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.splash("Bonus", "Points")
    info.setScore(100)
    tiles.setTileAt(tiles.getTileLocation(14, 14), sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    music.powerUp.play()
    info.changeScoreBy(100)
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Blue.setImage(img`
        . . . . . f f f f f f f f f f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 f f f f f f 8 f . 
        . . . . . f 8 f 8 8 8 8 f 8 f . 
        . . . . . f 8 f 8 8 8 8 f 8 f . 
        . . . . . f 8 f 8 8 8 8 f 8 f . 
        . . . . . f 8 f f f f f f 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 f f f f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f f f f . . f f f f . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    game.over(true, effects.splatter)
    music.baDing.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Blue.setImage(img`
        . f f f f f f f f f f . . . . . 
        . f 8 8 8 8 8 8 8 8 f . . . . . 
        . f 8 8 8 8 8 8 8 8 f . . . . . 
        . f f f f f f f 8 8 f f f . . . 
        . f 1 1 1 1 1 f 8 8 f 8 f . . . 
        . f 1 1 1 1 1 f 8 8 f 8 f . . . 
        . f 1 1 1 1 1 f 8 8 f 8 f . . . 
        . f f f f f f f 8 8 f 8 f . . . 
        . f 8 8 8 8 8 8 8 8 f 8 f . . . 
        . f 8 8 8 8 8 8 8 8 f f f . . . 
        . f 8 8 8 8 8 8 8 8 f . . . . . 
        . f 8 8 8 8 8 8 8 8 f . . . . . 
        . f 8 8 f f f f 8 8 f . . . . . 
        . f 8 8 f . . f 8 8 f . . . . . 
        . f 8 8 f . . f 8 8 f . . . . . 
        . f f f f . . f f f f . . . . . 
        `)
})
info.onCountdownEnd(function () {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Blue.setImage(img`
        . . . . . f f f f f f f f f f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . f f f 8 8 f f f f f f f . 
        . . . f 8 f 8 8 f 1 1 1 1 1 f . 
        . . . f 8 f 8 8 f 1 1 1 1 1 f . 
        . . . f 8 f 8 8 f 1 1 1 1 1 f . 
        . . . f 8 f 8 8 f f f f f f f . 
        . . . f 8 f 8 8 8 8 8 8 8 8 f . 
        . . . f f f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 f f f f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f f f f . . f f f f . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(tiles.getTileLocation(12, 12), sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    game.splash("Level 1", "Complete!")
    tiles.setTilemap(tiles.createTilemap(hex`1000100006040404040404040404040404040404010407070707070707070707070707040104070707070404040404040704070401040404040704040507070407040704010707070407070404070704070407040104040704040707040407040704070401040407070404070704070407040704010404070707040407040704070407040104040404070704070407040704070401040404040407040704070407040704010707040804070407040707070407040104070407070704070404040404040401040704040707040707070707070404010407040404040407040404040704040104040407070707070407070707090402030303030404040404040404040404`, img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 . . . . . . . . . . . . . 2 
        . 2 . . . . 2 2 2 2 2 2 . 2 . 2 
        . 2 2 . 2 . 2 2 . . . 2 . 2 . 2 
        . . . . 2 . . 2 2 . . 2 . 2 . 2 
        . 2 2 . 2 2 . . 2 2 . 2 . 2 . 2 
        . 2 2 . . 2 2 . . 2 . 2 . 2 . 2 
        . . . . . . 2 2 . 2 . 2 . 2 . 2 
        . 2 2 2 . . . 2 . 2 . 2 . 2 . 2 
        . 2 2 2 . 2 . 2 . 2 . 2 . 2 . 2 
        . . . 2 . 2 . 2 . 2 . . . 2 . 2 
        . 2 . 2 . . . 2 . 2 2 2 2 2 2 2 
        . 2 . 2 2 . . 2 . . . . . . 2 2 
        . 2 . 2 2 2 2 2 . 2 2 2 2 . 2 2 
        . 2 2 2 . . . . . 2 . . . . . 2 
        . . . . . 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorOpenNorth,sprites.dungeon.darkGroundCenter,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
    scene.setBackgroundColor(12)
    tiles.placeOnRandomTile(Blue, sprites.dungeon.doorOpenNorth)
    game.splash("Level 2", "Start!")
    game.splash("Avoid the Red Player at all costs")
    scene.cameraFollowSprite(Blue)
    game.splash("Find the Fuel can", "for Bonus Points")
    info.startCountdown(60)
    myEnemy = sprites.create(img`
        . . f f f f f f f f f f . . . . 
        . . f 2 2 2 2 2 2 2 2 f . . . . 
        . . f 2 2 f f f f f f f . . . . 
        . . f 2 2 f 1 1 1 1 1 f . . . . 
        . . f 2 2 f 1 1 1 1 1 f . . . . 
        f f f 2 2 f 1 1 1 1 1 f . . . . 
        f 2 f 2 2 f f f f f f f f f f . 
        f 2 f 2 2 2 2 2 2 2 2 f . f . f 
        f 2 f 2 2 2 2 2 2 2 2 f . f f . 
        f 2 f 2 2 2 2 2 2 2 2 f . f . . 
        f f f 2 2 2 2 2 2 2 2 f . f f . 
        . . f 2 2 2 2 2 2 2 2 f . f . f 
        . . f 2 2 2 f f f f 2 f . f f . 
        . . f 2 2 2 f . . f 2 f . f f . 
        . . f 2 2 2 f . . f 2 f . f . f 
        . . f f f f f . . f f f . f f . 
        `, SpriteKind.Enemy)
    pause(5000)
    tiles.placeOnRandomTile(myEnemy, myTiles.tile1)
    myEnemy.follow(Blue, 70)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Blue.setImage(img`
        . . . . . f f f f f f f f f f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f f f f f f f f f f . 
        . . . . . f f 1 1 1 1 1 1 f f . 
        . . . . . f f 1 1 1 1 1 1 f f . 
        . . . . . f f 1 1 1 1 1 1 f f . 
        . . . . . f f f f f f f f f f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 8 8 8 8 8 8 f . 
        . . . . . f 8 8 f f f f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f 8 8 f . . f 8 8 f . 
        . . . . . f f f f . . f f f f . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100001040404040404040404040404040408050606060706060606070606060606030507060606070607060706060706060305060607060606060607060606060603050606060607060607060706070606030506070606060706060606060606070305060606070606060607070607060603050706060606060606060606060706030506060606060706060706060706060305060607060606060606060606060603050606060606070606070607060607030506070607060606060606060606060305060606060606060606060706060703050706070606060607060606060606030506060606060706060606070606060308020202020202020202020202020208`, img`
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
        `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath5,myTiles.tile3,sprites.builtin.field0], TileScale.Sixteen))
    tiles.placeOnRandomTile(Blue, sprites.dungeon.doorOpenNorth)
    game.splash("Collect the Tablets for Bonus Points")
    pause(1000)
    game.splash("To finish the game", "Touch the green doors")
    controller.moveSprite(Blue)
    info.startCountdown(30)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTilemap(tiles.createTilemap(hex`10001000030b090909090909090909090909090a050b0b0b0b0b040b0b0b0b0b0b0b0b08050b0b0b0b0b040b0404040b0b0b0b08050b0b040404040b040b040b010b0b08050b0b040b040b0b040b040b040b0b08050b0b040b040b0b040b040b040b0b08050b0b040b040b0b040b040b040b0b08050b0b040b040b0b040b040b040b0b08050b0b040b040b0b040b040b040b0b08050b0b040b040b0b040b040b040b0b08050b0b040b0d0b0b040b020b04040408050b0b040b0b0b0b040b0b0b040b0b08050b0b040404040404040b0b0c0b0b08050b0b0b0b0b0b0b0b0b0b0b0b0b0b08050b0b0b0b0b0b0b0b0b0b0b0b0b0b080e060606060606060606060606060607`, img`
        . 2 . . . . . . . . . . . . . . 
        . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 . 2 . . . 2 2 2 2 . 
        . 2 2 . . . . 2 . 2 . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . 2 2 . 
        . . . . . . . . . . . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . 2 2 . 
        . 2 2 . 2 . 2 2 . 2 . 2 . . . . 
        . 2 2 . 2 2 2 2 . 2 2 2 . 2 2 . 
        . 2 2 . . . . . . . 2 2 . 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.floorDark0,sprites.dungeon.hazardLava0,sprites.builtin.field1,sprites.dungeon.darkGroundSouthWest0], TileScale.Sixteen))
    tiles.setTileAt(tiles.getTileLocation(5, 10), sprites.builtin.field1)
    tiles.placeOnRandomTile(Blue, sprites.dungeon.doorOpenNorth)
    game.splash("Find the Portal", "to the other dimension")
    myEnemy.destroy()
    info.startCountdown(30)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("Game ", "Complete!")
    info.changeScoreBy(10)
    game.splash("Bonus Level Unlocked!", "Press Menu to start")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let Blue: Sprite = null
Blue = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f f f . 
    . . . . . f 8 8 8 8 8 8 8 8 f . 
    . . . f f f 8 8 f f f f f f f . 
    . . . f 8 f 8 8 f 1 1 1 1 1 f . 
    . . . f 8 f 8 8 f 1 1 1 1 1 f . 
    . . . f 8 f 8 8 f 1 1 1 1 1 f . 
    . . . f 8 f 8 8 f f f f f f f . 
    . . . f 8 f 8 8 8 8 8 8 8 8 f . 
    . . . f f f 8 8 8 8 8 8 8 8 f . 
    . . . . . f 8 8 8 8 8 8 8 8 f . 
    . . . . . f 8 8 8 8 8 8 8 8 f . 
    . . . . . f 8 8 f f f f 8 8 f . 
    . . . . . f 8 8 f . . f 8 8 f . 
    . . . . . f f f f . . f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`10001000030b090909090909090909090909090a050b0b0b0b04040b0b0b0b0b0b0b0b08050b04040404040b0404040b0b0b0b08050b04040404040b040b040b01040b08050b04040b040b04040b040b04040b08050b04040b040b04040b040b04040b08050b04040b040b04040b040b04040b08050b04040b040b04040b040b04040b08050b04040b040b04040b040b04040b08050b04040b040b04040b040b04040408050b04040b040b04040b020b04040408050b04040b0b0b04040b0b0b04040b08050b0404040404040404040b010b0b08050b0404040404040404040b0b0b0b08050b0b0b0b0b0b0b0b0b0b0b0b0b0b080c060606060606060606060606060607`, img`
    . 2 . . . . . . . . . . . . . . 
    . 2 2 2 2 . . 2 2 2 2 2 2 2 2 . 
    . 2 . . . . . 2 . . . 2 2 2 2 . 
    . 2 . . . . . 2 . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . 2 . 
    . 2 . . 2 . 2 . . 2 . 2 . . . . 
    . 2 . . 2 . 2 . . 2 . 2 . . . . 
    . 2 . . 2 2 2 . . 2 2 2 . . 2 . 
    . 2 . . . . . . . . . 2 . 2 2 . 
    . 2 . . . . . . . . . 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundSouthWest0], TileScale.Sixteen))
tiles.placeOnRandomTile(Blue, sprites.dungeon.doorOpenNorth)
controller.moveSprite(Blue)
game.splash("Level 1", "Start!")
game.splash("Find the Door to escape")
game.splash("Avoid the Lava")
scene.cameraFollowSprite(Blue)
info.startCountdown(60)
info.setLife(3)
