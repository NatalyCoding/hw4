const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

const getPairs = () => {
    let girls[],
        boys[],
        pairs[];

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