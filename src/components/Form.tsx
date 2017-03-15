import * as React from "react";

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Select from './Select';

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

const reduceCb = (acc,value) => {
  acc[value.id] = '';
  return acc;
}

export default class Form extends React.Component<Props, State>{
    constructor (props) {
      super(props);

      this.state = {
        errors: props.items.reduce(reduceCb,{}),
        values: props.items.reduce(reduceCb,{})
      };
    }

    handleSubmit = (event) => {
      const {submitData} = this.props;
      //const result = validateForm(this.state.values);
      submitData(this.state.values);
      
      event.preventDefault();
    }

    handleChange = (name) => {
        return (event, index, value) => {
          this.setState({values: {...this.state.values,[name]: value}} as any)
        }
    }

    render() {
        const {items} = this.props;
        const {values, errors} = this.state;
        return (<div style={{flexGrow: 1}}>
                  <form>
                    {items.map(item => <Select key={item.id} error={errors[item.id]} value={values[item.id]} item={item} handleChange={this.handleChange(item.id)} />)}
                  </form>
                 </div>);
    }
}