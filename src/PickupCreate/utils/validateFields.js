/* checks whether a date is an instance of Date object and whether it's not NaN */
/* when strings are passed to new Date it returns NaN but as an instance of Date */
/* a number or a string like '3' passes both tests, which is an incorrect edge case */

export const

optionIsValid = (options, input) => Boolean(options.filter( option => option === input).length),

dateIsValid = date => new Date(date) instanceof Date && !isNaN(new Date(date))