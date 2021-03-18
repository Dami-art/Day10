
    //create lion obj here
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1
    };
    //end of lion object
    function myFunction("roar", "roar-roar") {
         //Only change code bellow this line
         lion["roar"] = "roar-roar";
        return lion;
      //Only change code above this line
  }
      console.log(myFunction("roar", "roar-roar"));
      module.exports = myFunction;
   
