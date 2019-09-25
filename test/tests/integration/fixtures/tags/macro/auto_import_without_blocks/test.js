const TwingTestIntegrationTestCaseBase = require('../../../../../../integration-test-case');

module.exports = class extends TwingTestIntegrationTestCaseBase {
    getDescription() {
        return '"macro" auto-import without blocks';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));
        templates.set('macros', require('./macros.twig'));

        return templates;
    }

    getExpected() {
        return require('./expected.html');
    }
};
