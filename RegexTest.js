"1".match(/1/); // find 1
"11".match(/11/); // find 11
"11".match(/12/); // null
"a52b".match(/52/); // find 52

//문자열안에 있는 모든 두자리 숫자를 찾고 싶다. \d(digit)
"a99b".match(/\d\d/); // find 99

let target = "abc32zzz";
let r = /\d\d/;
let result = target.match(r);
result; // find 32

let target = "abc32zzz";
let r = /\d\d/;
let result = target.match(r);
result && result[0]; // find only 32

//우편번호 검색
"123-123".match(/123-123/)[0];
"123-123".match(/\d\d\d-\d\d\d/)[0];
"123-123".match(/\d{3}-\d{3}/)[0];
"123-123".match(/\d{3}-\d{3}/)[0];

"19323".match(/\d{5}/)[0];
"19323".match(/(\d{3}-\d{3}|\d{5})/)[0];
"193-123".match(/(\d{3}-\d{3}|\d{5})/)[0];

"82405".match(/(\d{3}-\d{3}|[0-8]\d{4})/)[0]; // 0~8 find
"92405".match(/(\d{3}-\d{3}|[0-8]\d{4})/)[0]; // not find

"82405".match(/(\d{3}-\d{3}|[0-46-8]\d{4})/)[0]; //0~4,6~8 find

//핸드폰번호 검색
"010-9021-0011".match(/\d{3}-\d{4}-\d{4}/)[0];
"010-9021-0011".match(/01[01789]-\d{3,4}-\d{4}/)[0];


//치환
"011-9021-0011".replace(/(\d{2})\d/, "$10"); //$1이 괄호안, 0이 괄호옆 이라서 011 => 010으로 치환됨
"$$$iloveyou###".replace(/.*([a-zA-Z]{8}).*/, "$1");
"011-021-0011-12312-123".match(/\d.*/);
"011-021-0011-12312-123".match(/\d.*-/); // 011-021-0011-12312- find
"011-021-0011-12312-123".match(/\d.*?-/); // 011- find

//개발도구에서 함수, 변수 선택
\(?function\s+[a-zA-Z_$]+ //함수앞에 /가 나올수도 있고 함수뒤에는 공백하나이상(\s+)와 문자나 달러표시가 올수도 있다.
\s?(var|const|let)\s+[$_a-zA-Z]+


