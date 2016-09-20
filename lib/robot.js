'use strict';

function Robot() {
  // implement your solution here!
  // this.coordinates = [];
  this.orient = function(string){
  	if (string === 'north'){
  		this.bearing = 'north'
  	} else if (string === 'east'){
  		this.bearing = 'east'
  	} else if (string === 'west'){
  		this.bearing = 'west'
  	} else if (string === 'south'){
  		this.bearing = 'south'
  	} else {
  		throw new Error("Invalid Robot Bearing")
  	}
  }
  this.turnRight = function(){
  	if (this.bearing === 'north'){
  		this.bearing = 'east'
  	} else if (this.bearing === 'east'){
  		this.bearing = 'south'
  	} else if (this.bearing === 'south'){
  		this.bearing = 'west'
  	} else if (this.bearing === 'west'){
  		this.bearing = 'north'
  	} 
  }
  this.turnLeft = function(){
  	if (this.bearing === 'north'){
  		this.bearing = 'west'
  	} else if (this.bearing === 'west'){
  		this.bearing = 'south'
  	} else if (this.bearing === 'south'){
  		this.bearing = 'east'
  	} else if (this.bearing === 'east'){
  		this.bearing = 'north'
  	} 
  } 
  this.at = function(x, y){
  	this.coordinates = [x, y]
  }

  this.advance = function(){
  	if (this.bearing === "north"){
  		this.coordinates[1] += 1
  	} 
  	else if (this.bearing === "south"){
  		this.coordinates[1] -= 1
  	} 
  	else if (this.bearing === "west"){
  		this.coordinates[0] -= 1
  	}
  	else if (this.bearing === "east"){
  		this.coordinates[0] += 1
  	}
  }

  this.instructions = function(string){
  	var instructionList = []
  	string.split("").forEach(function(letter){
  		if (letter === "L"){
  			instructionList.push("turnLeft")
  		}
  		else if (letter === "R") {
  			instructionList.push("turnRight")
  		}
  		else if (letter === "A") {
  			instructionList.push("advance")
			}
  	})
  	return instructionList
  }

  this.place = function({x, y, direction}){
  	this.coordinates = [x, y]
  	this.bearing = direction
  }

  this.evaluate = function(string){
  	this.instructions(string).forEach(function(element){
  		if (element === "turnLeft"){
  			this.turnLeft()
  		}
  		else if (element === "turnRight"){
  			this.turnRight()
  		}
  		else if (element === "advance"){
  			this.advance()
  		}
  	}.bind(this))

  }
}