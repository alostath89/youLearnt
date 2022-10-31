import moment from 'moment'
import Vue from 'vue'

const momentTZ = moment.utc

// https://momentjs.com/docs/#/displaying/format/
const momentFormats = {
    dateTime: 'YYYY/MM/DD hh:mm A',
    date: 'YYYY/MM/DD',
    time: 'hh:mm A',
    time24: 'HH:mm',
    day: 'DD',
    month: 'MM',
    dayMonth: 'MM/DD',
    year: 'YYYY',
    monthYear: 'MM/YYYY',
    dashedDateTime: 'YYYY-MM-DD HH:ss',
    dashedDate: 'YYYY-MM-DD',
}

const momentFormatDateTime = (date, formatTo = 'date') => {
    // date: Expected to be like this "2022-02-14T00:00:00.000Z", will be returned as this "formatTo"
    if (!date) return null
    return momentTZ(date).format(momentFormats[formatTo])
}

// date: Expected to be like this "2022-02-14", will be returned as this "2022-02-14T00:00:00.000Z"
const momentParseDate = (date) => {
    if (!date) return null
    return momentTZ(date).toDate()
}

// time: Expected to be like this "05:21", will be returned as this "2022-02-23T05:21:00.000Z"
const momentParseTime = time => momentTZ(time, momentFormats.time24)

const mixin = {
    methods: {
        momentFormatDateTime,
        momentParseDate,
        momentParseTime,
        momentTZ,
    },
}

Vue.mixin(mixin)
