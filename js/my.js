//Business Logic

function Animal(species, name, type, color, status, age, gender, pic) {
  this.animalSpecies = species;
  this.animalName = name;
  this.animalType = type;
  this.animalColor = color;
  this.animalStatus = status;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalPic = pic;
}
Animal.prototype.Display = function (){
  $('#animalName').append(this.animalName);
  $('#animalSpecies').append(this.animalSpecies);
  $('#animalBreed').append(this.animalType);
  $('#animalColor').append(this.animalColor);
  $('#animalStatus').append(this.animalStatus);
  $('#animalAge').append(this.animalAge);
  $('#animalGender').append(this.animalGender);
  $('#animalPic').append("<img src=" + this.animalPic + ">")
  $('#animalDisplayWindow').show();
  return this.animalName;
}
//UI Logic
$(document).ready(function(){


  var cat1 = new Animal("Cat", "Marbles", "Domestic Shorthair", "Orange and Black", 'This animal is not available.', 12, "Male", "img/cat1.jpg");
  var cat2 = new Animal("Cat", "Darlene", "Siamese", "Beige", 'This animal is not available.', 2, "Female");
  var cat3 = new Animal("Cat", "Jasper", " ", "Beige", 'This animal is not available.', 2, "Male");
  var lizard1 = new Animal("Lizard", "Rambo", "Chameleon", "Gray", 'this animal is available.', 4, "Female");
  var lizard2 = new Animal("Lizard", "Bill Gates", "African Fat Tailed Gecko", "green", 'This animal is not available.', 5, "Male");
  var lizard3 = new Animal("Lizard", "Godzilla", "Desert Iguana", "Sand", 'this animal is available.', 1, "Female");
  var bird1 = new Animal("Bird", "Birdie Sanders", "Parakeet", "Blue", 'this animal is available.', 20, "Female");
  var bird2 = new Animal("Bird", "Ivanka", "Woodpecker", "Grey and Red", 'this animal is available.', 10, "Female");
  var bird3 = new Animal("Bird", "Peppers", "Bluejay", "Blue", 'this animal is available.', 20, "Male");
  var rat = new Animal("Rat", "The Reverand Ace Fuzzball", "House Rat", "Grey", 'this animal is available.', 1, "Male");
  var animalArray = [cat1, cat2, cat3, lizard1, lizard2, lizard3, bird1, bird2, bird3, rat];


  $("form.petForm").submit(function(event){
    event.preventDefault();
    var inputName = $(".name").val();
    var inputSpecies = $(".species").val();
    var inputBreed = $(".breed").val();
    var inputColor = $(".color").val();
    var inputAge = $(".age").val();
    var inputGender = $('input[name="optradio"]:checked').val()
    var newPet = new Animal(inputSpecies, inputName, inputBreed, inputColor, false, inputAge, inputGender);
  });

  //Populate list of Animals
  for (var i = 0; i < animalArray.length; i++) {
    $("ul#animalList").append("<li><span class='clickable'>" + animalArray[i].animalName + "</span> </li>");
  }

  $('#displayRow').show();

  $(".clickable").last().click(function(){

  })


    });
