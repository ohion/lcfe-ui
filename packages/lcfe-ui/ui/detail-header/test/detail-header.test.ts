import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { DetailHeader } from '../index';

test('detail-header test', () => {
  const wrapper = shallowMount(DetailHeader, {
    props: {}
  });

  it('detail-header demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
