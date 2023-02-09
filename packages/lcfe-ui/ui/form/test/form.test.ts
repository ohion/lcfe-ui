import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';
import { useNamespace } from '../../shared/hooks/use-namespace';

import { Form } from '../index';

test('form test', () => {
  const wrapper = shallowMount(Form, {
    props: {}
  });

  it('form demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });
});
