'use strict';

// Sample students array
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Eve", age: 19, grade: "A" }
];

function getStudentNames(students) {
  return students.map(student => student.name);
}

// Test the getStudentNames function
const studentNames = getStudentNames(students);
console.log(studentNames);

// Output should be:
// [ 'Alice', 'Bob', 'Eve' ]
