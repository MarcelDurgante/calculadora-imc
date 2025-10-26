const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');

// =========================================================
// DOM HELPERS
// =========================================================
const createParagraph = () => document.createElement('p');

const showResultado = (msg, isValid) => {
	// start fade-out for the current message
	resultado.classList.add('exiting');

	setTimeout(() => {
		resultado.classList.remove('exiting');
		resultado.textContent = ''; // clear previous result

		const p = createParagraph();
		p.textContent = msg;
		p.classList.toggle('not-valid', !isValid);
		resultado.appendChild(p);
	}, 200); // syncs with CSS fadeOutResult duration
};

// read and normalize inputs
const getInputs = (form) => {
	const normalize = (selector) => {
		const raw = form.querySelector(selector).value.trim().replace(',', '.');
		return raw === '' ? NaN : Number(raw);
	};

	return {
		peso: normalize('#peso'),
		altura: normalize('#altura'),
	};
};

// =========================================================
// LOGIC HELPERS
// =========================================================
const getImcValue = (peso, altura) => (peso / altura ** 2).toFixed(2);

const getImcCategory = (imc) => {
	const ranges = [
		{ max: 18.4, label: 'Abaixo do peso' },
		{ max: 25, label: 'Peso normal' },
		{ max: 30, label: 'Sobrepeso' },
		{ max: 35, label: 'Obesidade grau 1' },
		{ max: 40, label: 'Obesidade grau 2' },
		{ max: Infinity, label: 'Obesidade grau 3' },
	];

	// small safety fallback in case imc is NaN
	const match = ranges.find((range) => imc <= range.max);
	return match ? match.label : 'Valor de IMC inválido';
};

const validateInputs = (peso, altura) => {
	const messages = {
		both: 'Digite valores válidos nos dois campos!',
		peso: 'Digite um peso válido!',
		altura: 'Digite uma altura válida!',
		zero: 'Os valores precisam ser maiores que zero.',
	};

	if ([peso, altura].every(isNaN))
		return { valid: false, msg: messages.both };

	if (isNaN(peso)) return { valid: false, msg: messages.peso };

	if (isNaN(altura)) return { valid: false, msg: messages.altura };

	if (peso <= 0 || altura <= 0) return { valid: false, msg: messages.zero };

	return { valid: true, msg: '' };
};

// =========================================================
// EVENT HANDLING
// =========================================================
const handleSubmit = (e) => {
	e.preventDefault();
	const formElement = e.currentTarget;
	const inputs = form.querySelectorAll('input');
	const { peso, altura } = getInputs(formElement);
	const { valid, msg } = validateInputs(peso, altura);
	if (!valid) return showResultado(msg, false);
	const imcValue = getImcValue(peso, altura);
	const imcLevel = getImcCategory(Number(imcValue));
	const resultMsg = `Seu IMC é: ${imcValue} (${imcLevel})`;

	const clearOnNextFocus = (e) => {
		e.target.value = '';
	};

	inputs.forEach((input) => {
		input.addEventListener('focus', clearOnNextFocus, { once: true });
	});

	showResultado(resultMsg, true);
};

// =========================================================
// CLEAR INPUT ON FIRST FOCUS
// =========================================================

// =========================================================
// EVENT BINDING
// =========================================================
form.addEventListener('submit', handleSubmit);
