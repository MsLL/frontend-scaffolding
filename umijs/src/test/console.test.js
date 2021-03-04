import _ from 'lodash'
describe('console test', () => {
    test('test table', () => {
        let data = [
            { 'obj': 'moto', 'price': 19999 },
            { 'obj': 'oppo', 'price': 18999 },
            { 'obj': 'moto', 'price': 17999 },
            { 'obj': 'oppo', 'price': 15999 }
        ];
        data = _.sortBy(data, ['obj', 'price'])
        console.table(data)
    })
})