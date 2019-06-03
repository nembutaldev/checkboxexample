import React from 'react';



class CompUno extends React.Component{

    constructor(props){
        super(props);
        this.state = { optionsChecked : [] }
    }

    changeEvent(event){
        let checkedArray = this.state.optionsChecked;
        let selectedValue = event.target.value;

            if(event.target.checked === true){
                checkedArray.push(selectedValue);
                this.setState({
                    optionsChecked: checkedArray
                });
            }else{
                let valueIndex = checkedArray.indexOf(selectedValue);
                checkedArray.splice(valueIndex, 1);
                this.setState({
                    optionsChecked: checkedArray
                })
            }
    }



    render(){

        let checkBoxArray = ['uno', 'dos', 'tres'];
        let outputCheckboxes = checkBoxArray.map(function(string, i){
            return (<div><CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} /><label htmlFor={'string_' + i}>{string}</label></div>)
        }, this);

        
    }
}






export default CompUno