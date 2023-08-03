interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_0: Student = {
  firstName: "Ike",
  lastName: "Mathebula",
  age: 31,
  location: "Johannesburg",
};

const student_1: Student = {
  firstName: "Zintle",
  lastName: "Dubula",
  age: 30,
  location: "Tuffotein",
};

let studentList: Student[] = [student_0, student_1]

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentList.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  student_body.appendChild(tableRow);
})
student_table.appendChild(student_body);
document.body.appendChild(student_table);
