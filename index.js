const prompt = require('prompt-sync')();

function getSchoolSubjects() {
  const qntSchoolSubject = +prompt('Quantas matérias desejar inserir? ');
  const schoolSubjects = [];
  
  console.log('');
  
  for (let i = 0; i < qntSchoolSubject; i++) {
    const schoolGrades = [];
    const subjectName = prompt(`${i + 1} - Digite o nome da matéria: `);
    console.log('');
  
    schoolGrades.push(+prompt('Digite a primeira nota: '));
    schoolGrades.push(+prompt('Digite a segunda nota: '));
    schoolGrades.push(+prompt('Digite a terceira nota: '));
  
    const qtdSubjectAbsences = +prompt('Digite a quantia de faltas do aluno: ');
    console.log('');
  
    schoolSubjects.push({
      name: subjectName,
      grades: schoolGrades,
      abscences: qtdSubjectAbsences,
    })
  }

  const allAverageGrades = [];
  const allAbscences = [];
  
  schoolSubjects.forEach(schoolSubject => {
    const averageGrade = schoolSubject.grades.reduce((prev, curr) => prev + curr) / schoolSubject.grades.length;
    
    allAbscences.push(schoolSubject.abscences);
    allAverageGrades.push(averageGrade);

    console.log(`A média do aluno em ${schoolSubject.name} é: ${averageGrade.toFixed(2)}`);
  });
  
  const totalAbscences = allAbscences.reduce((prev, curr) => prev + curr)
  const generalAverage = allAverageGrades.reduce((prev, curr) => prev + curr) / allAverageGrades.length

  console.log('');
  console.log(`A média geral do aluno é: ${generalAverage.toFixed(2)}`);
  console.log(`Total de faltas: ${totalAbscences}`);
  console.log('');

  if (generalAverage >=6) {
    console.log('Aluno aprovado. Parabéns!')
  } else {
    console.log('Aluno retido por nota!')
  }
}

getSchoolSubjects();
