const studentList = [
    { name: "AATHIF", grade: 99 },
    { name: "AAFIYA", grade: 56.5 },
    { name: "FARIDA", grade: 89 },
    { name: "ABDULLAH", grade: 78.5 },
    { name: "SHADULLAH",grade: 50 }
    ];
    const passingStudents = studentList.filter(function(student) {
     return student.grade > 70;
    });
    console.log(passingStudents);