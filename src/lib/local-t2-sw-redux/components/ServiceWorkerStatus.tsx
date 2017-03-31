import * as React from 'react';
import { connect } from 'react-redux';
import {
  LogEntryInterface,
} from '../reducers';
import {flexParentRowStyle, flexRowItemStyle} from './styles'
export interface MyProps {
  updates: any;
  cache: any;
  log: LogEntryInterface[];
  actions: any[];
  dispatchAction(any):any
}

export interface MyState {
}


export default class ServiceWorkerStatus extends React.Component<MyProps, MyState> {
  dateToTimeStamp = (date) => {
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    let hoursS = ""+hours;
    let minutesS = ""+minutes;
    let secondsS = "" + seconds;
    if (hours   < 10) {hoursS   = "0"+hours;}
    if (minutes < 10) {minutesS = "0"+minutes;}
    if (seconds < 10) {secondsS = "0"+seconds;}
    return hoursS+':'+minutesS+':'+secondsS;
  }

  timestampToDateString = (secondsEpoch) => {
 
    let d = new Date(0);
    d.setUTCSeconds(secondsEpoch);
    var mm = d.getMonth() + 1; // getMonth() is zero-based
    var dd = d.getDate();
    var seconds = d.getSeconds();
    var timeStamp = this.dateToTimeStamp(d);
    let res =  [d.getFullYear(),
              (mm>9 ? '' : '0') + mm,
              (dd>9 ? '' : '0') + dd
              
             ].join('-') + ' ' + timeStamp;

    return res;
  }

  render () {
    var {updates,cache,log,actions,dispatchAction} = this.props;
   console.log(actions);
    return (
        <div>
          <h1>Service Worker Info</h1>
          <div style={flexParentRowStyle as any}>
             
             <div style={flexRowItemStyle}>
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
               <h3>Actions</h3>
               {actions.map((action,i) => {
                 return (
                     <div key={i}>
                       <button onClick={dispatchAction(action.actions)} type="button">
                         {action.name}
                       </button>
                     </div>
                   );
               })}
             </div>
             <div style={flexRowItemStyle as any}>
               <h3>SW Event Logs</h3>
            
               {log.map((entry,i) => {
                 return (
                     <div key={i}>
                       <h4>{this.timestampToDateString(entry.timestamp)}: {entry.name}</h4>
                       <div>
                         <pre>
                            {JSON.stringify(entry.info, undefined, 3)}
                         </pre>
                       </div>
                     </div>
                   );
               })}
             </div>

          </div>
        </div>
    );
  }
}