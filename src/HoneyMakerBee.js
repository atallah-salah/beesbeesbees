var HoneyMakerBee = function() {
	Bee.call(this);
	this.age=10;
	this.job= 'make honey'
	this.eat=Grub.prototype.eat;
	this.honeyPot=0;
};
HoneyMakerBee.prototype.makeHoney = function(){
	this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
	this.honeyPot--;
}
// HoneyMakerBee.prototype = Object.create(Bee.prototype);
// HoneyMakerBee.prototype = Object.create(Grub.prototype);
// HoneyMakerBee.prototype.constructor = HoneyMakerBee ;
