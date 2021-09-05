import term from './term'
import images from './images'
import pages from './page'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    term:term,
   images:images,
   pages:pages
})
export default allReducers