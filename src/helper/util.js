//numberFormat
const NumberFormat = data => {
	let value = typeof data === 'number' ? data : Number(data);
	return value.toLocaleString('en-Us');
};

const currencyFormat = (amount, currency) => {
	let Obj = {
		style: 'currency',
		currency: currency,
		currencyDisplay: 'symbol',
	};
	return amount.toLocaleString('en-GB', Obj);
};

export { currencyFormat, NumberFormat };
