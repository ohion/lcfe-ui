<template>
  <div :class="boxClass">
        <div :class="ns.m('header')" v-show="isHeader">
          <slot name="header" >{{ props.header }}</slot>

          <!-- {{(slots.header && slots.header()) || props.header}} -->
        </div>
        <div :class="ns.m('body')" :style="props.bodyStyle">
          <!-- {{slots.default && slots.default()}} -->
          <slot name="default" />
        </div>
      </div>
</template>

<script lang="ts" setup>
import { 
  computed,
  useSlots
} from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { cardProps, CardProps } from './card-types';
import type { PropType, ExtractPropTypes } from 'vue';
import './card.scss';
type ShadowType = 'always' | 'hover' | 'never';
interface Props {
  shadow:   ShadowType,
  header?: string
  bodyStyle: Object
}
const props = withDefaults(defineProps<Props>(),{
  shadow: 'always',
  header:''
})
const ns = useNamespace('card');
const boxClass = `${ns.b()} ${ns.m(props.shadow)}-shadow`;
  const emits = [ {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
  }]
   const slots = useSlots()
    const isHeader = computed(() => {
      return props.header || slots.header;
    });
</script>