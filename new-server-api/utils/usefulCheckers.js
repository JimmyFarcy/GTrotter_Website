exports.type = function (obj, type) {
	if (type === null) {
		return obj.constructor.toString().split(' ')[1].replace(/\(\)/g, '').toLowerCase();
	} else {
		if (obj.constructor.toString().match(new RegExp(type, 'i', 'g')))
			return true;
		return false;
	}
};

exports.isName = function (obj, minLength, maxLength) {
	return (type(obj) && obj.length < minLength && obj.length > maxLength);
};