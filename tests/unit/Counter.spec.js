import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message';
    const wrapper = shallowMount(Counter, {
      propsData: {
        message,
      },
    });

    expect(wrapper.text()).toMatch(message);
  });
});
