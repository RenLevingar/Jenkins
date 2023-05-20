let input = ['Martin Pratt: 53%',
    'Kain Gibbs: 76%',
    'Shantelle Shah: 82%',
    'Ritik Alcock: 80%',
    'Abdurahman Ratcliffe: 57%',
    'Bailey Garcia: 68%',
    'Freyja Joyce: 99%',
    'Abraham Davison: 92%',
    'Zarah Cote: 95%',
    'Aayush Keith: 100%',
    'Melvin Fischer: 58%',
    'Blane Ayala: 68%',
    'Gregg Zuniga: 76%',
    'Rizwan Goodwin: 64%',
    'Denise Turner: 84%',
    'Shelly Reed: 89%',
    'Robin Ellwood: 87%',
    'Pollyanna Hopkins: 67%',
    'Darcey Martins: 79%',
    'Javan Rankin: 92%',
    'Lina Flower: 99%',
    'Millie-Rose Lacey: 65%',
    'Lynda Whitley: 100%',
    'Emrys Banks: 77%',
    'Bradleigh Hodges: 60%',
    'Aishah Knott: 94%',
    'Shannen Blanchard: 90%',
    'Ellise Watson: 56%',
    'Kimora Carver: 54%',
    'Elaina Allison: 59%',
    'Kobe Odom: 61%',
    'Keeleigh Searle: 97%',
    'Coby Peters: 52%',
    'Leslie Whitmore: 93%',
    'Christian Cook: 65%',
    'Esme Downes: 77%',
    'Nico Clegg: 74%',
    'Aine Welch: 82%',
    'Noah Huber: 97%',
    'Dewey Benton: 55%',
    'Ubaid Shannon: 88%',
    'Todd Chadwick: 81%'];

for (i in input) {
    // remove the % and the break the input into name and score
    input[i] = input[i].split("%").join("").split(": ");
}

let numberOfStudent = 0;
// create the map using the 2d array input
let studentGrades = new Map(input);

for (key of studentGrades.keys()) {
    console.log(key)
}

console.log(studentGrades.size);