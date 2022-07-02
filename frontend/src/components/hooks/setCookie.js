import Cookie from 'js-cookie'
const setCookie = (cookiename, token) => {
	Cookie.set(cookiename, token, {
		expires: 1,
		secure: true,
		sameSite: 'strict',
		path: '/'
	})
}

export default setCookie