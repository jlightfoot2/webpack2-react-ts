import * as React from "react";

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export interface Props { 
  handleChange(event: any, index: number, value: string): void;
  value: string;
  error: string;
  item: {id: string, title: string,choices: {title: string, value: string}[]};
}

export interface State { 

}

export default class Select extends React.Component<Props, State>{

    render() {
        const {item,value,error,handleChange} = this.props;
        return (
          <div>
              <h3>{item.title}</h3>
              <SelectField 
                  hintText={'Select One'} 
                  value={value}
                  fullWidth={true}
                  onChange={handleChange}
                 // ref={(input) => { (this as any).textInput = input; }}
                  errorText={error}>

                 {item.choices.map(choice => <MenuItem key={choice.title} value={choice.value} primaryText={choice.title} />)}

               </SelectField>
           </div>
         );
    }
}