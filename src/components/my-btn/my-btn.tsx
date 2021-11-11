import { Component,  h, Listen, Prop } from '@stencil/core';
import { Appearance } from './appearance';

@Component({
  tag: 'my-btn',
  styleUrl: 'my-btn.css',
  shadow: true,
})

export class MyBtn {
  @Prop() appearance: Appearance | undefined;

  @Listen('click', { capture: true })
  clickHandler(ev) {
    console.log(`${this.appearance} Btn: I am clicked!!`)
  }

  render() {
    return (
      <button  class={`btn ${this.appearance}`}>
        <slot></slot>
      </button>
    );
  }

}
