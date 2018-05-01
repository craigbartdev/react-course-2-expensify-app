//same as import moment from 'moment' with no error
const moment  = require.requireActual('moment');

export default(timestamp = 0) => {
    return moment(timestamp);
};