window.addEventListener('beforeunload', function (event) {
  const curPagStr = this.localStorage.getItem("curPage");
  const curPage = +curPagStr;
  if (curPage >= -1) {
    this.localStorage.setItem("curPage", curPage + 1);
  }
});