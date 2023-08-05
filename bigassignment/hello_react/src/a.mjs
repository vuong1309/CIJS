import moment from 'moment'

const date = "2022-01-16";

const formattedmonth = moment(date).format('MMM')
console.log(formattedmonth);
