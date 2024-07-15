function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      // Use string interpolation to create the thank you message
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      
      // Add the message to the array
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  let names = ['Guadalupe', 'Ollie', 'Aki'];
  let event = 'surprise';
  let messages = writeCards(names, event);
  console.log(messages); // Output: Array of thank you messages

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(10);