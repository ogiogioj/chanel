function usedata(pname) {
  let newdata = data.filter((value) => value.name == pname);
  console.log(newdata);
}
