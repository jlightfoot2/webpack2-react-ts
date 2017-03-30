import * as React from 'react';
import { connect } from 'react-redux';
import {
  LogEntryInterface,
} from '../reducers';


export interface MyProps {
  updates: any;
  cache: any;
  log: LogEntryInterface[]
}

export interface MyState {
}


export default class AppStatusContainer extends React.Component<MyProps, MyState> {

  timestameToDateString = (ms) => {
    console.log(ms);
    let d = new Date(0);
    d.setUTCSeconds(ms);
    var mm = d.getMonth() + 1; // getMonth() is zero-based
    var dd = d.getDate();

    let res =  [d.getFullYear(),
              (mm>9 ? '' : '0') + mm,
              (dd>9 ? '' : '0') + dd
             ].join('-');

    return res;
  }

  render () {
    var {updates,cache,log} = this.props;
    console.log(log);
    return (
        <div>
           <h1>Service Worker Status</h1>
           <h3>Update Status</h3>
           <div>
             <pre>
                {JSON.stringify(updates, undefined, 3)}
             </pre>
           </div>
           <h3>Cache Status</h3>
           <div>
             <pre>
                {JSON.stringify(cache, undefined, 3)}
             </pre>
           </div>
           <h3>SW Event Logs</h3>
        
           {log.map((entry,i) => {
             return (
                 <div key={i}>
                   <h4>{this.timestameToDateString(entry.timestamp)}: {entry.name}</h4>
                   <div>
                     <pre>
                        {JSON.stringify(entry.info, undefined, 3)}
                     </pre>
                   </div>
                 </div>
               );
           })}
        </div>
    );
  }
}