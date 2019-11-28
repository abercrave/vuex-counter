import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  const defaultText = 'Click me!'
  const customText = 'Submit!'

  const wrapper = shallowMount(Button, {
    propsData: {
      isDisabled: false,
    },
  })

  it('is a button', () => {
    expect(wrapper.is('button')).toBe(true)
  })

  it('renders default content when none is passed', () => {
    expect(wrapper.text()).toBe(defaultText)
  })

  it('is enabled when specified', () => {
    expect(wrapper.attributes('disabled')).toBe(undefined)
  })

  it('is disabled when specified', () => {
    const wrapperDisabled = shallowMount(Button, {
      propsData: {
        isDisabled: true,
      },
    })

    expect(wrapperDisabled.attributes('disabled')).toBe('disabled')
  })

  it('renders slotted content when passed', () => {
    const wrapperWithSlot = shallowMount(Button, {
      propsData: {
        isDisabled: false,
      },
      slots: {
        default: customText,
      },
    })

    expect(wrapperWithSlot.text()).toBe(customText)
  })
});
