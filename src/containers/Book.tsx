import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import book from '../res/data/book';
import Book from '../components/Book';

const stateToProps = (state,ownProps) => {
  const isOpen = typeof ownProps.params.open !== 'undefined' ? true : false
  return {
    book: book,
    isOpen: isOpen
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    pageOpen: ownProps.pathOnTouchTap('/main/library/open')
  }
}
export default connect(stateToProps,dispatchToProps)

(Book);