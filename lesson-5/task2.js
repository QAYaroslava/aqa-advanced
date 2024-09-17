const averageGrade = 65;
switch (true) {
    case averageGrade <= 100 && averageGrade >=91:
        console.log('Твій рівень: Відмінно');
        break;
    case averageGrade <= 90 && averageGrade >=81:
        console.log('Твій рівень: Дуже добре');
        break;
    case averageGrade <= 80 && averageGrade >=71:
        console.log('Твій рівень: Добре');
        break;
    case averageGrade <= 70 && averageGrade >=61:
        console.log('Твій рівень: Задовільно');
        break;
    case averageGrade < 60:
        console.log('Твій рівень: Незадовільно');
        break;
}