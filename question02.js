function calculateGrade(marks) {
    if (marks > 90) {
      return "A";
    } else if (marks >= 70) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else {
      return "F";
    }
  }
  
  // Example usage:
  const studentMarks = 85;
  const grade = calculateGrade(studentMarks);
  console.log("Student's grade:", grade);
  
