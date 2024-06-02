const students = [
  {
    name: "shubham kumar",
    age: 24,
    marks: 95,
  },
  {
    name: "rahul jha",
    age: 12,
    marks: 82,
  },
  {
    name: "rohit raj",
    age: 10,
    marks: 75,
  },
  {
    name: "utkarsh Kumar",
    age: 20,
    marks: 65,
  },
];

// wap to return only name of student in capital

const names = students.map((student) => student.name.toUpperCase());

console.log(names);

// Wap to return only details of those who scored more that 68 marks

const moreThan68 = students.filter((student) => student.marks > 68);
console.log(moreThan68);

// wap to return only details of those who scored more that 60 & age is above 11
const moreThan60AndAgeAbove11 = students.filter(
  (student) => student.marks > 60 && student.age > 11
);

console.log(moreThan60AndAgeAbove11);

// wap to return sum of all marks of all students

const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);

// wap that return only names of students who scored more than 70

const marksMoreThan60 = students
  .filter((student) => student.marks > 70)
  .map((student) => student.name);

console.log(marksMoreThan60);

// Wap that return total marks of students with marks greator that 84 after 20 marks has been added to those who scored less that 68

const total = students
  .map((student) => {
    if (student.marks < 68) {
      student.marks += 20;
    }
    return student;
  })
  .filter((student) => student.marks > 84)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(total);
