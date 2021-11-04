import { mount } from '@vue/test-utils'
import DetailCard from '../src/components/DetailCard.vue'
import {DetailThumbnail} from '../src/api/models'

const pokemon: DetailThumbnail = {
    name: 'Charmander',
    description: 'Example',
    images: {
        front: 'http://example.com',
        back: 'http://example.com'
    }
}
describe('DetailCard.vue', () => {
    test('it shows the name', () =>{
        const wrappr = mount(DetailCard, {
            props: {
                pokemon
            }
        })
        expect(wrappr.text()).toContain(pokemon.name)
    })
    test('it shows the description', () =>{
        const wrappr = mount(DetailCard, {
            props: {
                pokemon
            }
        })
        expect(wrappr.text()).toContain(pokemon.description)
    })
    test('it shows the front and back images', () =>{
        const wrappr = mount(DetailCard, {
            props: {
                pokemon
            }
        })
        const images = wrappr.findAll('img')
        const srcs = images.map(image => image.attributes('src'))
        expect(srcs).toContain(pokemon.images.front)
        expect(srcs).toContain(pokemon.images.back)
    })
})