import assert from 'assert';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import TabItem from './TabItem';

let shallowRenderer;

describe('TabItem', () => {
  beforeEach(() => {
    shallowRenderer = createRenderer();
  });

  it('renders', () => {
    shallowRenderer.render(<TabItem title="Test" name="tab4" />);
    const tree = shallowRenderer.getRenderOutput();
    assert.equal(tree.type.displayName, 'View');
  });
});
