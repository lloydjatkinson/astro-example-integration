/* eslint-disable prettier/prettier */
import { assert, describe, expect, it } from 'vitest';
import { getComponentOutput } from 'astro-component-tester';
import { Foo } from './types';

const emptyComponent = '\n\n\n';

describe('Astro', async () => {
	describe('Component.astro', async () => {
		const foos: Foo[] = [
			{ bar: 'apple', qux: 'banana' },
			{ bar: 'orange', qux: 'pear' },
		];

		it('should return empty when foos are not defined', async () => {
			const component = await getComponentOutput('./src/Component.astro');
			expect(component.html).to.equal(emptyComponent);
		});

		it('should render foos correctly', async () => {
			const component = await getComponentOutput('./src/Component.astro', { foos });
			expect(component.html).to.contain(foos[0].bar);
			expect(component.html).to.contain(foos[0].qux);
			expect(component.html).to.contain(foos[1].bar);
			expect(component.html).to.contain(foos[1].qux);
		})
	});
});