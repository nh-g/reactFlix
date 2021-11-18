export function freezeBackground() {
  document.getElementById("root")!.style.position = "fixed";
  document.getElementById("root")!.style.width = "100vw";
  document.getElementById("root")!.style.height = "100vh";
  document.getElementById("root")!.style.top = `-${window.scrollY}px`;
}

export function unFreezeBackground() {
  document.getElementById("root")!.style.position = "";
  document.getElementById("root")!.style.width = "";
  document.getElementById("root")!.style.height = "";
  document.getElementById("root")!.style.top = "";
  const scrollY = document.body.style.top;
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
}
