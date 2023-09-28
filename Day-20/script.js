const obj = {
    name: 'Neeraj',
    gender: 'Male',
    yearOfBirth: 1997,
    calculate: function () {
        return 2023 - this.yearOfBirth;
    },
};

let key = 'calculate';
console.log(obj.name);
// console.log(obj[key]);
console.log(obj[key]());
