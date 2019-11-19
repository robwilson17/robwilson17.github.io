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
                {type: 'sawblade',x:440,y:370},
                {type: 'sawblade',x:500,y:200},
                {type: 'sawblade',x:800,y:300}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

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

function createEnemy(x,y){
    
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
        }
        
        
        
        
        
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
