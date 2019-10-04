import timesince from 'timesince'
import locale from 'timesince/locales/vi'

export default (now = Date.now()) => date => timesince({locale, now})(date)
