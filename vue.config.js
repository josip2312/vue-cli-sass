module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@use '@/styles/abstracts/_mixins.scss' as *;
                      @use '@/styles/abstracts/_variables.scss' as *;`,
			},
		},
	},
};
