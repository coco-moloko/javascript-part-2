function Tile(type){
    this.type = type;
    this.isWalkable = function(){
        if ("grass" || "sand") {
            return true;
        } else {
            return false;
        }
    };
}

function Map(width, height){
    this.width = Math.random(Math.floor);
    this.height = Math.random(Math.floor);
    this.tiles = 
}