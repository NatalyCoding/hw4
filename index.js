const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

/* Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]; */

const getPairs = () => {
    const girls = [];
    const boys = [];
    const pairs = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i] === 'Олена' || students[i] === 'Іра' || students[i] === 'Світлана') {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }
    for (let i = 0; i < boys.length; i++) {
        pairs.push([boys[i] + " i " + girls[i]]);
    }
    return pairs;
}

const pairs = getPairs(students);
console.log(pairs);

/* пошук по останній букві "a" - ?
for (int i = 0; i < str.length() - 1; i++) {
        a = str.length() - 1;        
        if (str[i] == a)  */

//////////////////////////////////////////////////////////////
/* Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]] */
const studentsAndThemes = (pair, subject) => {
    const pairsAndSubjects = [];
    for (let i = 0; i < pair.length; i++) {
        pairsAndSubjects.push([pair[i] + ", " + subject[i]]);
    }
    return pairsAndSubjects;
}
const studentsWithSubjects = studentsAndThemes(pairs, themes);
console.log(studentsWithSubjects);

/////////////////////////////////////////////////////////////
/* Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]] */
const studentsAndMarks = (array, mark) => {
    const studentsMarks = [];
    for (let i = 0; i < array.length; i++) {
        studentsMarks.push([students[i] + ', ' + marks[i]]);
    }
    return studentsMarks;
}
const studentsWithMarks = studentsAndMarks(students, marks);
console.log(studentsWithMarks);

////////////////////////////////////////////////////////////
/* Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */
const randomMark = (array) => {
    const studentsWithRandomMarks = [];
    for (let i = 0; i < array.length; i++) {
        studentsWithRandomMarks.push([studentsWithSubjects[i] + ': ' + Math.ceil(Math.random() * 5)]);
    }
    return studentsWithRandomMarks;
}

const allStudentsWithMarks = randomMark(studentsWithSubjects);
console.log(allStudentsWithMarks);