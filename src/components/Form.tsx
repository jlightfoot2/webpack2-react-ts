import * as React from "react";

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Select from './Select';
import RaisedButton from 'material-ui/RaisedButton';
import {flexParentRowStyle,flexRowItemStyle} from './commonStyles'

export interface FormErrorInterface {
  [propName: string]: {name: string,title: string};
}

export interface ValidationResultInterface {
  isValid: boolean;
  data: FormErrorInterface;
}

export interface Props { 
  submitData(data: any): void; 
  validateData(data: any): ValidationResultInterface;
  cancel(): any;
  items: any[]
  values: any;
}

export interface State { 
  values: any,
  errors: any
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
        values: props.values ? props.values : props.items.reduce(reduceCb,{})
      };
    }

    handleSubmit = (event) => {
      const {submitData,validateData} = this.props;
      const validationResponse = validateData(this.state.values);

      this.setState({errors: validationResponse.data});
      if(validationResponse.isValid){
        submitData(this.state.values)
      }
      
      event.preventDefault();
    }

    handleClear = (event) => {
      this.setState({values: this.props.items.reduce(reduceCb,{})})
    }

    handleChange = (name) => {
        return (event, index, value) => {
          this.setState({errors: {...this.state.errors, [name]: ''}});
          this.setState({values: {...this.state.values,[name]: value}} as any)
        }
    }

    render() {
        const {items} = this.props;
        const {values, errors} = this.state;
        return (<div style={{flexGrow: 1}}>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      {items.map(item => <Select key={item.id} error={errors[item.id]} value={values[item.id]} item={item} handleChange={this.handleChange(item.id)} />)}
                    </div>
                    <div style={flexParentRowStyle as any}>
                      <div style={flexRowItemStyle as any}>
                        <RaisedButton primary={true} type="submit" label="Save" />
                      </div>
                      <div style={flexRowItemStyle as any}>
                        <RaisedButton onTouchTap={this.props.cancel} secondary={true} type="button" label="Cancel" />
                      </div>
                      <div style={flexRowItemStyle as any}>
                        <RaisedButton  onTouchTap={this.handleClear} type="button" label="Clear" />
                      </div>
                    </div>
                  </form>
                </div>
                );
    }
}