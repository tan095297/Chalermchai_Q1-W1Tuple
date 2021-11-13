let student;
student = [
    ["1", "Chalermchai", 10, 11, 10, 0],
    ["2", "Jakrit", 20, 20, 14, 0],
    ["3", "Kongpop", 16, 20, 50, 0],
    ["4", "Pantira", 18, 18, 25, 0],
    ["5", "Phtacharee", 19, 21, 35, 0]
];
//let grade = [];
student.forEach(s => {
    s[5] += s[2] + s[3] + s[4];
    if (s[5] >= 80 && s[5] <= 100) {
        s[5] = 4;
    }
    else if (s[5] >= 75 && s[5] <= 79) {
        s[5] = 3.5;
    }
    else if (s[5] >= 70 && s[5] <= 74) {
        s[5] = 3;
    }
    else if (s[5] >= 65 && s[5] <= 69) {
        s[5] = 2.5;
    }
    else if (s[5] >= 60 && s[5] <= 64) {
        s[5] = 2;
    }
    else if (s[5] >= 55 && s[5] <= 59) {
        s[5] = 1.5;
    }
    else if (s[5] >= 50 && s[5] <= 54) {
        s[5] = 1;
    }
    else
        (s[5] = 0);
    console.log(`${s[1]}:คะแนน => ${s[2]}:${s[3]}:${s[4]}:Grade:${s[5]}`);
});
//console.log(grade)
