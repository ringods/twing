import TwingNodeExpressionBinary from "../binary";

const range = require('locutus/php/array/range');

class TwingNodeExpressionBinaryRange extends TwingNodeExpressionBinary {
    execute(left: any, right: any): any {
        return range(left, right);
    }
}

export default TwingNodeExpressionBinaryRange;