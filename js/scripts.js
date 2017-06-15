function Phone(brand, price, color, screenSize) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screenSize = screenSize;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + " and the screen size is " + this.screenSize + " inches.");
}

Phone.prototype.priceCheck = function() {
	if (this.price > 2000) {
		console.log("Za " + this.brand + " przepłacasz!")
	}
}

var iPhone6S = new Phone("Apple", 2250, "silver", 5);
var SamsungGalaxyS6 = new Phone("Samsung", 2500, "grey", 6);
var OnePlusOne = new Phone("OnePlus", 1200, "black", 4);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
OnePlusOne.priceCheck();
SamsungGalaxyS6.priceCheck();