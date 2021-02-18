import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyCustomElement extends HTMLElement {

  static get observedAttributes() {
    return ['title'];
  }

  constructor(){
    super();
    this._data = []
  }


  connectedCallback(){
    this.attachShadow({mode:'open'})
    this.render()
  }

  render(){
    if (this.shadowRoot){
      const props = {
        data: this._data
      }
      for(let i = 0 ; i < this.attributes.length ; i++){
        props[this.attributes[i].name] = this.attributes[i].value
      }

      ReactDOM.render(<App {...props} />,this.shadowRoot)
    }
  }

  get data(){
    return this._data;
  }

  set data(val){
    this._data= val;
    console.log(this._data)
  }

  get title(){
    return this.getAttribute('title');
  }

  set title(value){
    this.setAttribute('title',value)
  }

  attributeChangedCallback(){
    this.render()
  }

  disconnectedCallback(){
    ReactDOM.unmountComponentAtNode(this)
  }

}

window.customElements.define('my-custom-element',MyCustomElement)


