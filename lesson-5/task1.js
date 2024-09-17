const averageGrade = 99;
let level;
if (averageGrade <= 100 && averageGrade >= 91) {
    level = "Відмінно";
} else if (averageGrade <= 90 && averageGrade >= 81) {
    level = "Дуже добре";
} else if (averageGrade <= 80 && averageGrade >= 71) {
    level = "Добре";
} else if (averageGrade <=70 && averageGrade >= 60) {
    level = "Задовільно";
} else if (averageGrade < 60) {
    level = "Незадовільно";
}
console.log ('Твій рівень:', level)
