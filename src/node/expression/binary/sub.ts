import TwingNodeExpressionBinary from "../binary";

class TwingNodeExpressionBinarySub extends TwingNodeExpressionBinary {
    execute(left: any, right: any): any {
        return left - right;
    }
}

export default TwingNodeExpressionBinarySub;