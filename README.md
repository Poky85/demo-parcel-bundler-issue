# Parcel 2.8 bundler issue

This repo shows minimal reproduction of [bundling issue](https://github.com/parcel-bundler/parcel/issues/8792) present in `@parcel/bundler-default`

## Try it

```
npm install
npm run build
```

Run the server `npm run server` and open `http://127.0.0.1:8080`. You will see the error in the browser console.

```
ReferenceError: $1e3ba84e9ce044db$exports is not defined
```

## Temporary fix

To workaround the issue go to `src/ui/TableCell.tsx` and read instructions there. Then run build again.

```
rm -rf .parcel-cache && rm -rf dist
npm run build
```

Refresh the page. Error disappears.
