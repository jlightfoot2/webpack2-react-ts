import * as React from 'react';
import { connect } from 'react-redux';

/**
 * Alerts user to updates
 */

export interface MyProps {
  migrations: any;
  app: any;
}

export interface MyState {
  
}
class AppStatusContainer extends React.Component<MyProps, MyState> {

  render () {
    var {migrations, app} = this.props;

    return (
        <div>
           <h3>local-t2-app-reduxt Status</h3>
           <div>Migration Version# {migrations.version}</div>
           <div>
             <pre>
                {JSON.stringify(app, undefined, 3)}
             </pre>
           </div>
        </div>
    );
  }
}

const stateToProps = (state, ownProps) => {
  return {
     app: state.app,
     migrations: state.migrations // TODO remove me because migration not (currently) port of this bundle
  }
}

export default connect(stateToProps)(AppStatusContainer);