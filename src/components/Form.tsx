import * as React from "react";

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export interface FormItemInterface {

}

export interface Props { 
  submitData(data: any): void; 
  items: any[]
}

export interface State { 
  values: any[],
  errors: any[]
}

const formField =  (item,value,error) => {

  return (<div key={item.id}>
        <SelectField 
              floatingLabelText={item.title} 
              hintText={'Select Here'} 
              value={value}
              fullWidth={true}
              onChange={this.handleChange}
              ref={(input) => { (this as any).textInput = input; }}
              errorText={error.title}>

             {item.choices.map(choice => <MenuItem key={choice.title} value={choice.value} primaryText={choice.title} />)}

         </SelectField>
  </div>)
}

export default class Form extends React.Component<Props, State>{
    constructor (props, context) {
      super(props, context);

      this.state = {
        errors: props.errors,
        values: props.values
      };
    }

    handleSubmit = (event) => {
      const {submitData} = this.props;
      //const result = validateForm(this.state.values);
      submitData(this.state.values);
      
      event.preventDefault();
    }

    render() {
        return (<div style={{flexGrow: 1}}>
                  <form>
                    {this.props.items.map(item => formField(item,1,''))}
                  </form>
                 </div>);
    }
}