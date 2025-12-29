let students = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

console.log(students.length);

let a = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

a.push("Giorgi");

console.log(a);

let b = ["Nika", "Ana", "Luka", "Mariam", "Nino", "giorgi"];

b.unshift("salome");
console.log(b);

let c = ["salome", "nika", "Ana", "Luka", "Mariam", "Nino", "giorgi"];

c.shift();
console.log(c);

let d = ["salome", "nika", "Ana", "Luka", "Mariam", "Nino", "giorgi"];

d.pop();

console.log(d);

let e = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

e.sort();

console.log(e);

let f = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

let firstwo = f.slice(0, 2);

console.log(firstwo);

let g = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

let middleIndex = Math.floor(students.length / 2);

g.splice(middleIndex, 1);

console.log(g);

let group = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

console.log(group.students.length);

let bam = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

bam.students.push("guga");

console.log(bam.students);

let champ = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

champ.students.pop();

console.log(champ.students);

let last = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

last.students.shift();

console.log(last.students);

let bet = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

bet.students.sort();

console.log(bet.students);

let that = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

let firstTwoStudents = that.students.slice(0, 2);

console.log(firstTwoStudents);

let l = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

let index = l.students.indexOf("Giorgi");

if (index !== -1) {
  l.students.splice(index, 1);
}

l.students.push("Bacho", "Salome");

console.log(l.students);

const studentsData = [
  {
    id: 1,
    personal: {
      name: "Nia",
      age: 21,
      contact: {
        email: "Nia@mail.com",
        phone: {
          countryCode: "+995",
          number: "555123456",
        },
      },
    },
    education: {
      university: "Ilia State University",
      skills: ["JavaScript", "React", "React Native"],
    },
  },
  {
    id: 2,
    personal: {
      name: "Ana",
      age: 22,
      contact: {
        email: "ana@mail.com",
        phone: {
          countryCode: "+995",
          number: "599987654",
        },
      },
    },
    education: {
      university: "TSU",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  },
];

const ana = studentsData[1];

console.log("Name:", ana.personal.name);
console.log("Age:", ana.personal.age);
console.log("Email:", ana.personal.contact.email);
console.log(
  "Phone:",
  ana.personal.contact.phone.countryCode + ana.personal.contact.phone.number
);

const studentData = [
  {
    id: 1,
    personal: {
      name: "Nia",
      age: 21,
      contact: {
        email: "Nia@mail.com",
        phone: {
          countryCode: "+995",
          number: "555123456",
        },
      },
    },
    education: {
      university: "Ilia State University",
      skills: ["JavaScript", "React", "React Native"],
    },
  },
];

const nia = studentData[0];

console.log("name", nia.personal.name);
console.log("University:", nia.education.university);
console.log("Skills:", nia.education.skills);
