// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kryon Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kartikey2004-git/AI-Code-Review' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Local Setup', slug: 'getting-started/setup' }
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Core Engine', slug: 'architecture/core-engine' },
						{ label: 'Data & Vectors', slug: 'architecture/data-and-vectors' },
					],
				},
				{
					label: 'Engineering',
					items: [
						{ label: 'Optimizations', slug: 'engineering/optimizations' },
						{ label: 'Tradeoffs', slug: 'engineering/tradeoffs' },
						{ label: 'Bottlenecks', slug: 'engineering/bottlenecks' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API Endpoints', slug: 'reference/api-endpoints' },
						{ label: 'Folder Structure', slug: 'reference/folder-structure' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Contribution Guide', slug: 'contributing/guide' }
					],
				},
			],
		}),
	],
});
