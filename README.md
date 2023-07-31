# SARS-CoV-2 Variant Distribution

This app pulls data from the CDC.

```ts
// data needs to be in this format:

data: {
  labels: ['date', 'date', 'date'],
  datasets: [
    { label: 'XBB1.1', data: [null, 20, null, 16, 26.4]}
  ]
}
```

1. step through each record and build an array of unique variant names.

2. then step through by date and build an array of percentages for each variant. if no percentage, enter _null_ into the array.
