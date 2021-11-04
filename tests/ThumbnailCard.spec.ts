import { mount } from '@vue/test-utils'
import ThumbnailCard from '../src/components/ThumbnailCard.vue'
import {PokemonThumbnail} from '../src/api/models'

const pokemon: PokemonThumbnail = {
    name: 'Charmander',
    number: '1',
    image: 'https://example.com'
}
describe('ThumbnailCard.vue', () => {
    test('it shows the name', () =>{
        const wrappr = mount(ThumbnailCard, {
            props: {
                pokemon
            }
        })
        expect(wrappr.text()).toContain(pokemon.name)
    })
    test('it shows the number', () =>{
        const wrappr = mount(ThumbnailCard, {
            props: {
                pokemon
            }
        })
        expect(wrappr.text()).toContain(pokemon.number)
    })
    test('it shows the image', () =>{
        const wrappr = mount(ThumbnailCard, {
            props: {
                pokemon
            }
        })
        const image = wrappr.find('img')
        expect(image.attributes('src')).toContain(pokemon.image)
    })
})