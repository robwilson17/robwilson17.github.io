var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:440,y:300},
                {type: 'sawblade',x:520,y:410},
                {type: 'sawblade',x:800,y:275},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:6780,y:245},
                {type: 'sawblade',x:875,y:440},
                {type: 'sawblade',x:200,y:329},
                {type: 'box',x:500,y:-25},
                {type: 'enemy',x:400,y:25},
                {type: 'reward',x:700,y:100}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
    
        var damageFromObstacle = 10;
function createSawBlade(x,y) {
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);

        var obstacleImage = draw.bitmap('img/sawblade.png');          
            myObstacle.addChild(obstacleImage);            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
    }

var enemy =  game.createGameItem('enemy',25);
var reward = game.createGameItem('reward', 25);
var redSquare = draw.rect(50,50,'red');
var greenSquare = draw.rect(50,50,'green');
var purpleSquare = draw.rect(50,50,'purple');

//enemy.x = 400;
//enemy.y = groundY-50;
//
//game.addGameItem(enemy);
function createEnemy(x,y){
    enemy.x = x;
    enemy.y = groundY- y;
    enemy.velocityX = -10;
    rotationVelocity = 10;
    enemy.addChild(purpleSquare);
    
game.addGameItem(enemy);

var obstacleImage2 = draw.bitmap('img/sawblade.png');          
            myObstacle.addChild(obstacleImage);            
            obstacleImage2.x = -25;
            obstacleImage2.y = -25;
}
//createEnemy(800,25)
function createBox(x,y){

redSquare.x = x;
redSquare.y = y;
enemy.addChild(redSquare);

//enemy.x = 400;
//enemy.y = groundY-50;
//
//game.addGameItem(enemy);
//   
};
//createBox(500,-25);
    enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-100);
        //enemy.fadeOut();
};
function createReward(x, y){
    greenSquare.x = x;
    greenSquare.y = y;
    greenSquare.velocityX = -10;
    reward.addChild(greenSquare);
    
    
}
    redSquare.onPlayerCollision = function(){
        game.increaseScore(100);
        reward.fadeOut();


    }

        for  (var j = 0; j < levelData.gameItems.length; j++){
            var gameItem = levelData.gameItems[j];
            if (levelData.gameItems[j].type === 'sawblade'){
            createSawBlade(gameItem.x, gameItem.y);
            }
            if (levelData.gameItems[j].type === 'enemy'){
            createEnemy(gameItem.x, gameItem.y);
            }
            if (levelData.gameItems[j].type === 'reward'){
            createReward(gameItem.x, gameItem.y);
            }
            if (levelData.gameItems[j].type === 'box'){
            createBox(gameItem.x,gameItem.y);
            }
        }
        
        
        
        
        
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
