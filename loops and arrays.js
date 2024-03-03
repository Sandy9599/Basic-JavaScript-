 // Define an array of colors
 let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

 // Get the ul element to display colors
 let colorsListElement = document.getElementById('colorsList');

 // Loop through the array and display each color in a list item
 for (let i = 0; i < colors.length; i++) {
   // Create a new list item
   let listItem = document.createElement('li');

   // Set the text content of the list item to the current color
   listItem.textContent = colors[i];

   // Append the list item to the ul element
   colorsListElement.appendChild(listItem);
 }