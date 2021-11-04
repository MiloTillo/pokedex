import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    test('it renders message', () => {
        const wrappr = mount(HelloWorld, {
            props: {
                msg: 'Hello'
            }
        })
        const h1 = wrappr.find('h1')
        expect(h1.text()).toContain('Hello')
    })
})


