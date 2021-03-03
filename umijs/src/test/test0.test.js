// yarn test |  yarn test src/test/test0.test.js
import moment from 'moment'
describe('Array test',()=>{
    test('test includes',()=>{
        expect(['start','stop'].includes('start')).toBe(true)
    })
})

describe('function test',()=>{
    test('parameter test',()=>{
        const fn=(...p)=>{
            expect(Array.isArray(p)).toBe(true)
        }
        fn(1,2,3)
        fn()
    })
})

describe('解构对象 test',()=>{
    test('test',()=>{
    const fn=({xx,yy,...others})=>{
        console.log(xx)
        console.log(yy)
        console.log('%o',others)
    }

    fn({xx:'valx',yy:'valy'})
    fn({xx:'valx',yy:'valy',pp:'valp',zz:'valz'})
})
})

describe('moment test',()=>{
    test('test format',()=>{
        console.log(moment(1614782678000).format('YYYY-MM-DD HH:mm:ss'))
    })
})