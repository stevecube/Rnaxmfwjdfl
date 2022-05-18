// 변수 선언
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
const label_1 = document.getElementById('label-1');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const seventh = document.getElementById('seventh');
const eight = document.getElementById('eight');
const ninth = document.getElementById('ninth');
const tenth = document.getElementById('tenth');
const eleventh = document.getElementById('eleventh');
const twelfth = document.getElementById('twelfth');
// 변수 선언
start_2 = ': ';
score = 0;
lo = 0;
A = '마음속에 떠오르는 생각이나 운율이 있는 언어로 압축하여 표현하는 문학';
B = '정해진 형식에 맞추어 쓴 시';
C = '정해진 형식 없이 자유롭게 쓴 시';
D = '행을 구분하지 않고 줄글로 쓴 시';
E = '개인의 감정과 생각을 주관적으로 표현한 시';
F = '역사적 사건이나 신화, 전설, 영웅의 이야기를 쓴 시';
G = '연극의 대본처럼 대사로 이루어진 시';
H = '시를 읽을 때 느껴지는 말의 가락, 리듬';
I = '시인이 시를 통해 말하고자 하는 중심 생각';
J = '시를 읽을 때 떠오르는 느낌이나 모습';
K = '시 속에서 단어가 사전적 의미 외에 시인이 부여한 다양하능 의미를 품고 있는 것';
L = '사전적, 지시적, 객관적';
M = '함축적, 다의적, 주관적';
b = [A, B, C, D, E, F, G, H, I, J, K, L, M];
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
// 배열 선언
label_output = ['시의 개념과 특성', '시적 화자'];
AA = '시';
BB = '정형시';
CC = '자유시';
DD = '산문시';
EE = '서정시';
FF = '서사시';
GG = '극시';
HH = '운율';
II = '주제';
JJ = '심상';
KK = '시어의 함축적 의미';
LL = '일상어';
MM = '시어';
label1_output = [AA, BB, CC, DD, EE, FF, GG, HH, II, JJ, KK, LL, MM];
label1.innerHTML = label_output[0];
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
// 공용 함수
function change_1() {
    lo += 1;
    label2.innerHTML = label1_output[lo] + start_2;
    score += 1;
};
//  중복 체크 함수
console.log(b);
function duplicate_check() {
    const random1 = b[Math.floor(Math.random() * b.length)];
    if (random1 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random1 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[4])  {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[11]) {
        b.pop();
        console.log(b);
    }
    const random2 = b[Math.floor(Math.random() * b.length)];
    if (random2 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random2 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[10]) {
        b.pop();
        console.log(b);
    }
    const random3 = b[Math.floor(Math.random() * b.length)];
    if (random3 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random3 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[9]) {
        b.pop();
        console.log(b);
    }
    const random4 = b[Math.floor(Math.random() * b.length)];
    if (random4 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random4 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[8]) {
        b.pop();
        console.log(b);
    }
    const random5 = b[Math.floor(Math.random() * b.length)];
    if (random5 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random5 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 3);
        a3 = a1.concat(a2);
        console.log(b);
    }
    else if (random5 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[7]) {
        b.pop();
        console.log(b);
    }
    const random6 = b[Math.floor(Math.random() * b.length)];
    if (random6 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random6 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, 1);
        a3 = a1.concat(a2);
        b =  a3;
        console.log(b);
    }
    else if (random6 == b[6]) {
        b.pop();
        console.log(b);
    }
    const random7 = b[Math.floor(Math.random() * b.length)];
    if (random7 == b[0]){
        b.shift();
        console.log(b);
    }
    else if (random7 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[5]) {
        b.pop();
        console.log(b);
    }
    const random8 = b[Math.floor(Math.random() * b.length)];
    if (random8 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random8 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if(random8 == b[4]) {
        b.pop();
        console.log(b);
    }
    const random9 = b[Math.floor(Math.random() * b.length)];
    if (random9 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random9 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[3]) {
        b.pop();
        console.log(b);
    }
    const random10 = b[Math.floor(Math.random() * b.length)];
    if (random10 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random10 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, 1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[2]) {
        b.pop();
        console.log(b);
    }
    const random11 = b[Math.floor(Math.random() * b.length)];
    if (random11 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random11 == b[1]) {
        b.pop();
        console.log(b);
    }
    const random12 = b[Math.floor(Math.random() * b.length)];
    if (random12 == b[0]) {
        b.shift();
        console.log(b);
    }
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
    fifth.innerHTML = random5;
    sixth.innerHTML = random6;
    seventh.innerHTML = random7;
    eight.innerHTML = random8;
    ninth.innerHTML = random9;
    tenth.innerHTML = random10;
    eleventh.innerHTML = random11;
    twelfth.innerHTML = random12;
}
duplicate_check();
outputt.addEventListener('click', function() {
    inputt = input1.value;
    if (score == 0) {
        if (inputt == A) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 1) {
        if (inputt == B) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML= incorrect;
        }
    }
    else if (score == 2) {
        if (inputt == C) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 3) {
        if (inputt == D) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 4) {
        if (inputt = E) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 5) {
        if (inputt == F) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 6) {
        if (inputt == G) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 7) {
        if (inputt == H) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 8) {
        if (inputt == I) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 9) {
        if (input == J) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 10) {
        if (input == K) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 11) {
        if (input == L) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 12) {
        if (input == M) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
});