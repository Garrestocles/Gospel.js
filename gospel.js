/************************************************
The good news of salvation through Jesus Christ, 
described in JavaScript.
*************************************************/
var God = {
	Father: {
		create: function(){
			return new Human();
		},
		grace: function(human){ //Ephesians 2:8
			human.hasFaith = true;  
			God.Christ.atonement(human); 
		},
		justice: function(human){  //Hebrews 10:30; John 5:28-29
			if(human.hasFaith){ //John 5:24
				human.sins.committed = God.Christ.perfectLife.sins;//2 Corinthians 5:21
			}
			if(human.sins.committed > 0){ //Mathew 5:48
				human.sins.wagesOf(human); //Revelation 21:8; Mathew 25:41-46
				console.log("Eternal Judgement for Bob.\n");
			}else{
				console.log("Eternal Life for Bob.\n");
			}
		},
		resurrect: function(entity){ //Ezekiel 37:12-14
			entity.lives = true;
		}
	},
	Christ: {
		lives: true,
		perfectLife: {
			sins: 0
		},
		atonement: function(human){
			human.sins.wagesOf(God.Christ);  //Romans:5:8
			God.Father.resurrect(God.Christ);  //1 Corinthians 15:3-10
			human.hasSalvation = true;   //Romans 8:38-39
			human.sins.fogiven = human.sins.committed + time;  //Acts 10:43; Romans 8:1
		}
	},
	HolySpirit: {
		help: function(human){ 
			human.goodWorks++; //Galatians 5:22-23
		}
	}	
};

var Human = function(){
	this.sins = {
		committed : 0,
		wagesOf : function death(payer){  //Romans 6:23
			if(this.committed > 0){
				payer.lives = false;
			}
		},
		fogiven : 0
	};
	this.goodWorks = 0;
	this.hasFaith = false;
	this.lives = true;

	this.hasSalvation = false;
};

var bob = God.Father.create();  //Let's name our example person "Bob", but could be anyone.

var time = 6;  //This represent's Bob's alotted time on earth

var events = function(human){
	human.sins.committed++; //Romans 3:10-18;23
	if (human.hasFaith){ //James 2:14-18
		God.HolySpirit.help(bob); //Acts 4:29-31
	}
};

var earthlyLife = setInterval(function(){//Periods of Bob's life
	events(bob);  //Events in each period
	console.log("\nBob's life thus far:\nSins: "+bob.sins.committed+"\tgoodWorks: "+bob.goodWorks+"\tFaith: "+bob.hasFaith+"\thasSalvation: "+bob.hasSalvation+" \tSins Forgiven: "+bob.sins.fogiven);
	time--; //Time marches on...
	if(time === 3){ 
		God.Father.grace(bob);
	}
	if(time === 0){
		outOfTime(bob);
	}
},1750);

var outOfTime = function(){
	clearInterval(earthlyLife);
	console.log("\nBob has reached the end of his life. God judges Bob:");
	God.Father.justice(bob);//Hebrews 9:27
};
