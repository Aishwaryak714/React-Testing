const arr = [
    { id: 2, name: "test1" },
    { id: 6, name: "test1" },
    { id: 1, name: "test1" },
    { id: 4, name: "test1" }
  ];
  //assending order sort
  arr.sort((a, b) => a.id - b.id);
  console.log(arr);
  //descending order sort
  arr.sort((a, b) => b.id - a.id);