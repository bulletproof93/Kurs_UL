(function (global) {
    //Object.create()
	var Cat = {
		type: 'Cat',
		eat: function (animal){
		if(animal.type=='Bird')
			return 'Mniam!';
		else 
			return 'Blee!';
			
		}
	};
	var Bird = {
		type: 'Bird',
		eat: function (animal){
		if(animal.type=='Worm')
			return 'Mniam!';
		else 
			return 'Blee!';
			
		}
	};
	var Worm = {
		type: 'Worm',
		eat: function (animal){
			return 'Blee!';
			}
	};


	if (!global.UAM) {
		global.UAM = {};
	}

	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;

}(window));