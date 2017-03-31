import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';
/**
 * Alerts user to updates
 */
export default class UpdateSnackBar extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

/*
  componentWillReceiveProps = (nextProps) => {
      if(nextProps.open && !this.state.open){
        this.setState({open: true})
      }
  }
  */
  handleActionTouchTap = () => {
    const {onClick} = this.props;
    onClick();
  }
  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {message,open,autoHideDuration} = this.props;
    return (
        <Snackbar
          open={open}
          action="update"
          message={message}
          autoHideDuration={autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
    );
  }
}