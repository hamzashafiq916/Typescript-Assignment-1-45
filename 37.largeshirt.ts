// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
//  message that reads "I love TypeScript".
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
// a different message.
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
  console.log(`Shirt size is ${size} and it says "${message}".`);
}
make_shirt(); // Large shirt with default message
make_shirt('Medium', `I love TypeScript`); // Medium shirt with default message
make_shirt('Small', 'I am not confortable in this size'); // Small shirt with custom message
