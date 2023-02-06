let result = fetch("https://pixabay.com/api/?key=33420442-09e22f34ecac941bb7ddcda2e&q=yellow+flowers&image_type=photo")
  .then(data => data.json()).then(result => console.log(result));
console.log(result)