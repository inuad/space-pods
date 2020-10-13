import data from '@/assets/data.json';
import { matchers } from "jest-json-schema";

expect.extend(matchers);

describe('JSON Data', () => {
	it('Json data must be validated format', () => {
		const schema = {
			type: 'array',
			items: {
				type: 'object',
				required: ["word", "username", "pattern"],
				properties: {
					word: {
						type: 'string',
						minLength: 1,
					},
					username: {
						type: 'string',
						minLength: 1,
					},
					pattern: {
						type: 'number',
						enum: [1, 2, 3]
					},
				}
			}
			
		}
		expect(data).toMatchSchema(schema)
	})
})
