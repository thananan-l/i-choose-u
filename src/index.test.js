const expect = require('chai').expect
const pokemon = require('./index')

describe('i-choose-u', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(pokemon.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every((item) => {
          return typeof item === 'string'
        })
      }
    })

    it('should contain "Latios"', () => {
      expect(pokemon.all).to.include('Latios')
    })
  })

  describe('random', () => {
    it('should return a random item from the pokemon.all', () => {
      const randomItem = pokemon.random()
      expect(pokemon.all).to.include(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = pokemon.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach((item) => {
        expect(pokemon.all).to.include(item)
      })
    })
  })
})
