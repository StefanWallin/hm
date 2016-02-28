import React from 'react';

function mockViewComponent(type) {
  const Component = React.createClass({
    displayName: type,
    propTypes: { children: React.PropTypes.node },
    render() { return React.DOM.div(this.props, this.props.children); },
  });

  return Component;
}

export const View = mockViewComponent('View');
export const Text = mockViewComponent('Text');
export const ScrollView = mockViewComponent('ScrollView');

export const StyleSheet = {
  create: (ss) => ss
};

export const PropTypes = React.PropTypes;
export const NativeModules = {
  Constants: {
    app_id: 'testid'
  },
};

export default {
  ...React,
  StyleSheet,
  PropTypes,
  NativeModules,
  View,
  Text,
  ScrollView
};
