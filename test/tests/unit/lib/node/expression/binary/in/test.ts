import * as tape from 'tape';
import {TwingNodeExpressionConstant} from "../../../../../../../../src/lib/node/expression/constant";
import {TwingNodeExpressionBinaryIn, type} from "../../../../../../../../src/lib/node/expression/binary/in";
import {MockCompiler} from "../../../../../../../mock/compiler";

tape('node/expression/binary/in', (test) => {
    test.test('constructor', (test) => {
        let left = new TwingNodeExpressionConstant(1, 1, 1);
        let right = new TwingNodeExpressionConstant(2, 1, 1);
        let node = new TwingNodeExpressionBinaryIn([left, right], 1, 1);

        test.same(node.getNode('left'), left);
        test.same(node.getNode('right'), right);
        test.same(node.type, type);

        test.end();
    });

    test.test('compile', (test) => {
        let left = new TwingNodeExpressionConstant(1, 1, 1);
        let right = new TwingNodeExpressionConstant(2, 1, 1);
        let node = new TwingNodeExpressionBinaryIn([left, right], 1, 1);
        let compiler = new MockCompiler();

        test.same(compiler.compile(node).getSource(), 'this.isIn(1, 2)');

        test.end();
    });

    test.end();
});
