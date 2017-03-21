import * as React from 'react';

import PageWithLinks from '../components/PageWithLinks';
import {resourcesPage} from '../res/data/page';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

export const resourcesLinks = [
  {title: 'Library', link: '', attributes: {}},
  {title: 'Links and Books', link: '', attributes: {}},
  {title: 'Forum', link: '', attributes: {}},
  {title: 'Facts', link: '', attributes: {}},
  {title: 'Articles', link: '', attributes: {}},
  {title: 'Tips', link: '', attributes: {}},
];

const externalUrlClick = (url) => {
  return (event) => {
    window.location.href = url;
    event.preventDefault();
  }
}

const stateToProps = (state, ownProps) => {
  return {
    title: 'Resources',
    page: {title: resourcesPage.title, subtitle: 'Family & Friends Module', content: resourcesPage.content},
    content: resourcesPage.content,
    image: resourcesPage.image,
    actions: []
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(PageWithLinks);