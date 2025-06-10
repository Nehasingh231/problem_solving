const students = [
  { name: "Neha", marks: 92 },
  { name: "Rohit", marks: 78 },
  { name: "Ananya", marks: 64 },
  { name: "Vikram", marks: 45 },
  { name: "Sanya", marks: 88 },
];

function getGrade(marks) {
  if (marks > 90) return "A";
  if (marks > 75) return "B";
  if (marks > 50) return "C";
  return "D";
}


function showGrades() {
     const list = document.getElementById("student-list");
     const gradedStudents = students.map(student => {
        return {...student, grade: getGrade(student.marks)

        };
     });

     list.innerHTML = "";
  gradedStudents.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name} - Marks: ${student.marks}, Grade: ${student.grade}`;
    list.appendChild(li);
  });
}


const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  const newTodo = prompt("Enter new todo");
  if(newTodo) {
    todos.push(newTodo);      // Add to array
    renderTodos(todos);       // Re-render list
  }
});
