import { shallowMount } from '@vue/test-utils'
import DisplayTitle from '@/components/DisplayTitle.vue'
import { CONSTANT } from "@/components/@mock-package/vue";

describe('DisplayTitle.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(DisplayTitle);

    expect(wrapper.text()).toMatch(CONSTANT);
  })
})
