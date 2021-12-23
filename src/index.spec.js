import {slugger} from "./index";
/**
 * @describe [optional] - group of tests with a header to describe them
 */
 describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        let output="hey-u";
        expect(slugger("  hey","u")).toEqual(output);
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        
        let output="hey-how-are-u";

        expect(slugger("hey   "," how","   are"," u")).toEqual(output);
    })
})