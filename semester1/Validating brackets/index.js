const st1 = '{[]()}({}))';
const st2 = '{[]()}({})';

validBrackets(st1);
validBrackets(st2);

// функция проверки порядка скобок (переписано с Pascal-кода)
function validBrackets(str) {
	let diagnoz = 'Хорошо';
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case '{':
			case '[':
			case '(':
				stack.push(str[i]);
				break;
			case '}':	
				if (stack.length == 0) { 
					diagnoz = 'Плохо'; 
				} 
				if (stack[stack.length - 1] == '{') {
					stack.pop();
				}
				break;
			case ']':
				if (stack.length == 0) { 
					diagnoz = 'Плохо'; 
				} 
				if (stack[stack.length - 1] == '[') {
					stack.pop();
				}
				break;	
			case ')':
				if (stack.length == 0) {
					diagnoz = 'Плохо';
				} 
				if (stack[stack.length - 1] == '(') {
					stack.pop();
				}
				break;
			default:
				break;
		}
	}
	if (stack.length == 0 && diagnoz == 'Хорошо') { 
		console.log('Хорошая строка'); 
	} else {
		console.log('Плохая строка');
	}
	return (stack.length == 0 && diagnoz == 'Хорошо');
}