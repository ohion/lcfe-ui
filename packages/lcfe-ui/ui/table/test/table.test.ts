// 引入测试相关依赖
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';

// 引入 card
import { Table } from '../index';
import { useNamespace } from '../../shared/hooks/use-namespace';

const ns = useNamespace('table');
const getUserListApi  = ()=>{

}
const filterForm = {
    type:1
}
// 创建测试
test('mount component', () => {
  // 创建一个包装后的测试组件
  const wrapper = shallowMount(Table, {
    props: {
        getListApi:getUserListApi,
        filterForm:filterForm
    }
  });

  //  测试组件是否生成成功 
  it('Table demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });

  // 测试组件是否有 .ccui-card 属性的元素
  it('Table should have content', () => {
    const container = wrapper.find(ns.b());
    expect(container.exists()).toBeTruthy();
  });
});