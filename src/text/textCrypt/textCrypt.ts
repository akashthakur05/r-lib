import React from "react";
import { defaultOptions, getChar } from "./util";

export interface TextCryptProps {
    text:string
    options?:{chars:string[],interval:number}
}
 
export interface TextCryptState {
    value:string,
    result:string
    options:{chars:string[],interval:number}
    
}

export class TextCrypt extends React.Component<TextCryptProps, TextCryptState> {
    
    crypting: ReturnType<typeof setTimeout>
    constructor(props: TextCryptProps) {
        super(props);
        if (this.props.children){
            throw Error('Children not supported  use  text prop')
        }

        this.state = { 
            value:this.props.text || '',
            result:'',
            options:{ ...defaultOptions, ...props.options} 
         };
       
    }

    componentDidMount(){
        let i = 0
         this.crypting = setInterval(() => {        
            this.setState(prevState => {
              if (prevState.result === this.state.value) {
                clearInterval(this.crypting);
                return {result:this.state.value};
              }
              const oldLength = prevState.result ? prevState.value.length : 0;
              const newLength = this.state.value.length;
              const maxLength = Math.max(oldLength, newLength);
              return {result: [...new Array(maxLength)]
                .map((_, j) => getChar(i, j, maxLength, prevState.value, this.state.value, this.state.options.chars))
                .join("")};
      
            });
            i++;
          }, this.state.options.interval);

    }

    componentWillUnmount(){
        clearInterval(this.crypting);
    }


    render() { 
        return this.state.result;
    }
}
 
