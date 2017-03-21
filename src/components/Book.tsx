import * as React from "react";
import { Link } from 'react-router';
import BookCover from  './BookCover';
import Page from './Page';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export interface Props { 
  appBarTitle(msg: string): any;
  book: any;
  isOpen: boolean;
  pageOpen(any): void;
  title: string;
  //currentPage: number;
}

export interface State {
  numPages: number;
  currentPage: number;
  isOpen: boolean;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
const pageMenu = (pages,pageClick) => {
  return (
      <Menu>
       {pages.map((page,i) => <MenuItem key={page.id} primaryText={page.title} onTouchTap={pageClick(i)} />)}
      </Menu>
    )
}

export default class Book extends React.Component<Props, State> {
    constructor(props){
      super(props);

      this.state = {
        numPages: props.book.pages.length || 0,
        currentPage: 0,
        isOpen: this.props.isOpen || false
      }
    }
    componentWillMount () {
      const {title} = this.props;
      this.props.appBarTitle(title);
    }

    componentWillReceiveProps(nextProps) {
      const {book,isOpen,title} = nextProps;

      this.props.appBarTitle(title);
      this.setState({isOpen});
    }

    handlePageClick = (pageIdx) => {
      const {pageOpen} = this.props;
      return (event) => {
        this.setState({currentPage: pageIdx, isOpen: true});
        pageOpen(event);
      }
    }

    handleBookClose = (event) => {
      this.setState({isOpen: false});
    }

    handlePageNext = (event) => {
      let nextPage = this.state.currentPage + 1;
      if(nextPage < this.state.numPages){
        window.scrollTo(0,0);
        this.setState({currentPage: nextPage});
      }
    }

    handlePagePrevious = (event) => {
      let prevPage = this.state.currentPage - 1;
      if(prevPage > -1){
        window.scrollTo(0,0);
        this.setState({currentPage: prevPage});
      }
    }


    render() {
      const {book} = this.props;
        const page = book.pages[this.state.currentPage] ? book.pages[this.state.currentPage] : book.pages[0];
        const currentPageContent = <Page next={this.handlePageNext} previous={this.handlePagePrevious} close={this.handleBookClose} pageIndex={this.state.currentPage} numPages={this.state.numPages} page={page} />;
        let content = currentPageContent;
        if(!this.state.isOpen){
          content = pageMenu(book.pages,this.handlePageClick);
          return (<div>
                      <BookCover book={book} />
                      
                        {content}
                  
                  </div>
                );
        } else {
          return currentPageContent
        }
    }
}