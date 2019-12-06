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
                {type: 'sawblade', x:1000, y:groundY},
                {type: 'sawblade',x:1600,y:groundY},
                {type: 'sawblade',x:2400,y:groundY},
                {type: 'sawblade', x:3000, y:groundY},
                {type: 'sawblade',x:3600,y:groundY},
                {type: 'sawblade',x:4200,y:groundY},
                {type: 'box',x:2000,y:groundY-120},
                {type: 'box', x:3200, y:groundY-120},
                {type: 'box', x:6400, y:groundY-120},
                {type: 'box', x:8600, y:groundY-120},
                {type: 'enemy', x: 800, y: groundY-55},
                {type: 'enemy', x: 1600, y: groundY-55},
                {type: 'enemy', x: 2400, y: groundY-55},
                {type: 'reward', x: 1400, y: groundY-120},
                {type: 'reward', x: 1000, y: groundY-120},
                {type: 'reward', x: 2000, y: groundY-120}
            ]
        };

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
var myObstacle;

//sawblade :
            var createSawBlade = function(x,y) {
                var hitZoneSize = 30;
                var damageFromObstacle = 10;
                var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
                    myObstacle.x = x;
                    myObstacle.y = y;
                var obstacleImage = draw.bitmap('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fuuma_Shuriken.svg/525px-Fuuma_Shuriken.svg.png');
                    myObstacle.addChild(obstacleImage);
                    obstacleImage.x = -70;
                    obstacleImage.y = -75;

                    obstacleImage.scaleX = 0.20;
                    obstacleImage.scaleY = 0.20;

                game.addGameItem(myObstacle);

                myObstacle.onPlayerCollision = function() {
                    game.changeIntegrity(-10);
                    myObstacle.fadeOut();
                };
            };



//extra obstacle :
        var createBox = function(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
            var obstacleImage = draw.bitmap('http://www.pngall.com/wp-content/uploads/2/Fireball-PNG-Free-Download.png');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -50;
                obstacleImage.y = -55;
                obstacleImage.scaleX = 0.25;
                obstacleImage.scaleY = 0.25;

            game.addGameItem(myObstacle);

            myObstacle.onPlayerCollision = function() {
                game.changeIntegrity(-20);
                myObstacle.fadeOut();
            };
        };



//enemy :
        function createEnemy (x,y) {
            var enemy =  game.createGameItem('enemy',30);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -0.65;
            var redSquare = draw.bitmap('https://www.freepngimg.com/thumb/anime/26592-5-uchiha-sasuke-transparent.png');
                redSquare.x = -40;
                redSquare.y = -40;
                redSquare.scaleX = 0.045;
                redSquare.scaleY = 0.045;

            enemy.addChild(redSquare);

            game.addGameItem(enemy);
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };

            enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };
        }



//reward :
        function createReward (x,y) {
            var reward = game.createGameItem('reward', 16);
                reward.x = x;
                reward.y = y;
                reward.velocityX = -1;
            var sharingan = draw.bitmap('http://agarioskins.com/submitted/useruploads/obito-mangekyo-sharingan.png');
                sharingan.x = -12;
                sharingan.y = -12;
                sharingan.scaleX = 0.10;
                sharingan.scaleY = 0.10;
            reward.addChild(sharingan);

            game.addGameItem(reward);

            reward.onPlayerCollision = function() {
                game.increaseScore(100);
                game.changeIntegrity(+20);
                reward.fadeOut();
            };
        }

        for (var X = 0; X < levelData.gameItems.length; X++) {
            var gameItem = levelData.gameItems[X];

            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'box') {
                createBox(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'enemy') {
                createEnemy(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'reward') {
                createReward(gameItem.x,gameItem.y);
            }
        }

    };

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}