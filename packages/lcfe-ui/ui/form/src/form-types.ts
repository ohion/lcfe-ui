import type { PropType, ExtractPropTypes } from 'vue'

export const formProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
