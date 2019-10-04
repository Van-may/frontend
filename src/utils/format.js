const defaultDateOptions = {year: 'numeric', month: 'long', day: 'numeric'}

export const postDate = (input, extraOptions) => {
	const date = new Date(input)
	return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
		.toLocaleDateString('vi-VN', {...defaultDateOptions, ...extraOptions})
		.replace(/^1 /, '1º ')
}
