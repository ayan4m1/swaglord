import { createElement } from 'react';

/**
 * Creates a mock component which will expose its props for snapshot testing purposes.
 *
 * @param {string} name The component/element name (e.g. "MyComponent")
 * @param {object} props An object containing props to setup
 * @return {object} Mock component with specified name and props
 */
export const mockComponent = (name, props = {}) => () =>
  createElement(name, props, props.children);
