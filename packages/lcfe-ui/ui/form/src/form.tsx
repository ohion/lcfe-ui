import { defineComponent } from 'vue'
import { formProps, FormProps } from './form-types'
import './form.scss'

export default defineComponent({
  name: 'CForm',
  props: formProps,
  emits: [],
  setup(props: FormProps, ctx) {
    return () => {
      return (<div class="lc-form"></div>)
    }
  }
})
