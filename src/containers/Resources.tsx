import BasicPage from '../components/BasicPage';
import {resourcesPage} from '../res/data/page';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const externalUrlClick = (url) => {
  return (event) => {
    window.location.href = url;
    event.preventDefault();
  }
}
const stateToProps = (state, ownProps) => {
  return {
    title: 'Resources',
    subtitle: 'Family & Friends Module',
    content: resourcesPage.content,
    image: resourcesPage.image,
    actions: [
      {label: 'Test AD Link', action: externalUrlClick(ownProps.appConfig.parentSite)}
    ]
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(BasicPage);