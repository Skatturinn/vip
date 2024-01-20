import validator from 'email-validator'
import xss from 'xss';

export function isUrlValid(string: string): string {
	return URL.canParse(string) ? (new URL(string)).href : '';
}

export function messagevalidationmiddleware(name: string | any, email: string | any, message: string | any) {
	const b = name.trim().length < 1 ? 'nafn má ekki vera tómt' : name.length > 64 ? 'Nafn má að hámarki vera 64 stafir' : message.length > 400 ? 'athugasemd má að hámarki vera 400 stafir' : '';
	if (b) {
		throw new Error(b)
	}
	if (!validator.validate(email)) {
		throw new Error('Villa í netfangi')
	}
	const c = xss(name);
	const d = xss(message)
	const e = xss(email)
	return { name: c.trim(), message: d.trim(), email: e.trim() }
}