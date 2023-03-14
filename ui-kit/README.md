This represents a UI Kit package that wants to support both web and react native exports. It has two tsconfigs, and the "active" one used by VS Code can be set with `npm run env:web` or `npm run env:native`. Using Typescript moduleExtensions, each platform specific build will find its own version of code to export. This means we can `import Button from './button';` and Typescript will grab `button.web.ts` or `button.native.ts` depending on the TSConfig being used.

### The Problem

Typescript does not apply an import transformation for module extensions, nor does it do path rewrites to include said extension. For example Typescript paths (as far as I can tell) do not support interpolation: `import foo from 'foo.$platform';`.

### Possible Solutions

1. Custom Typescript plugin that looks at the resolved import, and modifies anything ending with `.web` or `.native`. This would make the import include the full file name (minus ts(x) extension) and packages consuming this UI Kit will be able to find the correct files. 
2. Run a post-build process that removes `.web` and `.native` from all build files. Simple and efficient but it'd be nice if we could keep it all in Typescript.