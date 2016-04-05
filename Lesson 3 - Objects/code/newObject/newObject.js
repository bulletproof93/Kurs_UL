(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var o = Object.create(constructor.prototype);
        var arr = new Array();
        
        for(var i=1; i < arguments.length; i++)
        {
            arr.push(arguments[i]);
        }
        
        if(constructor.apply(o, arr) != null)
        o = constructor.apply(o, arr);
        return o;
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/

