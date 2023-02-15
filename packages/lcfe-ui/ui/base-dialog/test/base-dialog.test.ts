import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { BaseDialog } from '../index';

test('base-dialog test', () => {
  const wrapper = shallowMount(BaseDialog, {
    props: {}
  });

  it('base-dialog demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
