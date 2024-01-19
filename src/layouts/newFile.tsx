import { Astro } from './Layout.astro';

<Fragment>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>
<body>
<Header />
<slot />
</body>
</html>

<style is:global>{`
	:root {
		color-scheme: light dark;
	}
	html {
		font-family: system-ui, sans-serif;
	}
	
	body {
		background: #000;
		display: flex;
		justify-content: center;
	}
`}</style>

</Fragment>;
