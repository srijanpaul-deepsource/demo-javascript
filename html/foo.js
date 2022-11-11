Boolean(!!x);

for (; !!foo; ) {}

(function deleteComment() {
  document.querySelector(".actionBar-action--delete").click();
  setTimeout(() => {
    document.querySelector(".button--icon--delete").click();
  }, 500)
})();

console.log('fubar')
