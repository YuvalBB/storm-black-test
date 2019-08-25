# storm-black-test

```
Installation:

clone git rep
npm install / yarn install
npm start / yarn start
```


Known Issues (== things I didn't have time to deal with):
- console errors: mostly lib / framework erros
- Aggregate SelectedChips not working properly (see [SelectedChipsAggregateBug](https://github.com/YuvalBB/storm-black-test/blob/master/src/components/SelectedChipsAggregateBug/SelectedChips.tsx))
  - I was literally debugging for HOURS! Treid to make it nice with `ref={callBack}` but it was called too many times for some reasons.
- Therefore, used [SelectedChipsNoAggregate](https://github.com/YuvalBB/storm-black-test/blob/master/src/components/SelectedChipsNoAggregate/SelectedChips.tsx) instead, with no aggregation.
- Not fully TypeScript
- Messy styling / stylesheets (Wish I had time to use styled-components)
- Could be more pretty ;)
