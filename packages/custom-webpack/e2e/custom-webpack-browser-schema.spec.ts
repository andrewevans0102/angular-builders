
import {customWebpackConfig, indexTransform} from "./custom-webpack-config-schema";


describe('custom webpack browser builder test', () => {
	let customWebpackBrowserSchema: any;

	beforeEach(() => {
		jest.resetModules()
		customWebpackBrowserSchema = require('../dist/browser/schema.json');
	});

	it('Should fit the schema of @angular-devkit/build-angular:browser', () => {
		const originalBrowserSchema = require('@angular-devkit/build-angular/src/browser/schema.json');
		customWebpackBrowserSchema.properties['customWebpackConfig'] = undefined;
		customWebpackBrowserSchema.properties['indexTransform'] = undefined;
		expect(originalBrowserSchema.properties).toEqual(customWebpackBrowserSchema.properties);
	});

	it('Should contain customWebpackConfig', () => {
		expect(customWebpackBrowserSchema.properties.customWebpackConfig).toEqual(customWebpackConfig);
	});

	it('Should contain indexTransform', () => {
		expect(customWebpackBrowserSchema.properties.indexTransform).toEqual(indexTransform);
	});
});
