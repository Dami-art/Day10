
    //create school object
    var school = {
        "name": "Arena",
        "location": "Sarajevo",
        "established": 2020,
      
    };
    // end of school obj
    function myFunction(name) {
        //bellow
        school.name = "Paragon";
        return name;
        //abowe
    }
      myFunction();
      module.exports = { school, myFunction };
  
   
