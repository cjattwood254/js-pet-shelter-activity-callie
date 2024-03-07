document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    var petShelter = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet(petName, petType, petAge){
        let pet = {
          name: petName,
          type: petType,
          age: petAge,
        };
        petShelter.push(pet);
        console.log(petShelter);
    }

    // Function to display pets in the shelter - given to you!
    function displayPet() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(var i = 0; i < petShelter.length; i++){
        let pet = petShelter[i];
        let petItem = document.createElement("li");
        petItem.textContent = `${pet.name} ${pet.type} ${pet.age}`;
        petList.appendChild(petItem);
        console.log(pet);
      }
      }         

 //will assist with adding each pet item to be shown in the list on the browser{}

    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 3);
    addPet("Whiskers", "Cat", 12);
    addPet("Blueberry", "Hamster", 1);
    addPet("Napkin", "Cat", 6);
    
    // Display the pets in the shelter
    displayPet();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    // var needHome = 4
    // if (needHome > 0){
    //   console.log("Someone needs a home!");
    // }
  function checkAnimalsInShelter(){
    if(petShelter.length > 0){
      console.log("Animals need homes!")
    } else{
      console.log("All animals have homes!")
    }
  }
    // Check if the pet shelter has animals that need homes by calling the previous function
    checkAnimalsInShelter();
  
    // Function to calculate the average age of pets in the shelter
   function averageAge(petShelter){
    let average = 0;
    for(let i = 0; i, petShelter.length; i++){
      let pet = petShelter[i];
      average += pet.age;
    }
    let ageAverage = average / petShelter.length;
   }
  
    // Calculate the average age of pets in the shelter by calling the previous function
  averageAge();


  });
  