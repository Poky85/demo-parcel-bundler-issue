# Parcel 2.8 bundler issue

This repo shows minimal reproduction of [bundling issue](https://github.com/parcel-bundler/parcel/issues/8792) present in `@parcel/bundler-default`

## Try it

```
npm install
npm run build
```

## Temporary fix

To workaround the issue go to `src/ui/TableCell.tsx` and read instructions there. Then run build again.

```
rm -rf .parcel-cache && rm -rf dist
npm run build
```
