(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject() {}
        var result = {}
        var Person = function(name)
        {
            this.name = name;
            return result;
        };
    
        Person.prototype.sayHello = function() 
        {
            return "Hi I am" + this.name + '.';
        }
    
    var obj = newObject(Person, "Krystian");
    
    Object.getPrototypeOf(obj);
    obj.sayHello();

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/

