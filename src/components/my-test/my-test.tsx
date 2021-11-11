import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-test',
  styleUrl: 'my-test.css',
  shadow: true,
})

export class MyTest {
  connectedCallback() {
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  
  componentWillLoad() {
    //this method is only called once, it's a good place to
    // load data asynchronously.
    console.log('componentWillLoad component is about to load');
  }

  componentDidLoad() {
    //Called once just after the component fully loaded
    // and the first render() occurs.
    console.log('componentDidLoad');
  }

  componentShouldUpdate() {
    //This hook is called when a component's Prop or State
    // property changes and a rerender is about to be requested.
    return true;
  }

  componentWillRender() {
    // It's always recommended to make any rendered state updates
    //  within componentWillRender()
    console.log('componentWillRender');
  }
  
  componentDidRender() {
    // Called after the component fully rendered
    //  within componentDidRender()
    console.log('componentDidRender');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate - is called since we are updating');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - is called since we are updating');
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
