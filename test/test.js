import sum from '../src/utils/sum'
import {expect} from 'chai';
import 'mocha';
describe("sum function测试",function(){
    it('应该返回hello world',function(){
        const result = sum();
        expect(result).to.equal("hello World");
    })
})