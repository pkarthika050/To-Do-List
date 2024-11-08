// Select the form, input, and list
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listener for adding a task
form.addEventListener("submit", function(event) {
   event.preventDefault();
   const taskText = input.value;
   if (taskText) {
       addTask(taskText);
       input.value = ""; // Clear the input after adding
   }
});

// Function to add a task
function addTask(taskText) {
   // Create a new list item
   const li = document.createElement("li");
   li.classList.add("todo-item");

   // Create a checkbox for marking the task as complete
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.addEventListener("change", function() {
       // Toggle the completed class based on the checkbox state
       if (checkbox.checked) {
           span.classList.add("completed");
       } else {
           span.classList.remove("completed");
       }
   });

   // Add task text
   const span = document.createElement("span");
   span.textContent = taskText;
   li.appendChild(checkbox); // Append the checkbox to the list item
   li.appendChild(span); // Append the task text to the list item

   // Add delete button
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", function() {
       li.remove(); // Remove task when delete button is clicked
   });
   li.appendChild(deleteBtn);

   // Append the new list item to the todo list
   todoList.appendChild(li);
}
