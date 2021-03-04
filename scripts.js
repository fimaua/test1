let prevBtn = document.querySelector(".content-carusel__arrow-left");
let nextBtn = document.querySelector(".content-carusel__arrow-right");
let peppermintImg = document.querySelectorAll(".peppermint");
let raspberryImg = document.querySelectorAll(".raspberry");
let peachImg = document.querySelectorAll(".peach");
let bgColor = document.querySelector(".page");

let productsListElements = document.querySelectorAll(
  ".content-carusel__product-list div"
);
let productsList = document.querySelector(".content-carusel__product-list");

let position = 0;
let maxPosition = productsListElements.length;

let styleChanged = (pos) => {
  if (pos === 0) {
    return (
      (bgColor.style["background-image"] = "url(./src/peppermint-BG.jpg)"),
      (productsList.style["transform"] = "translateX(0%)"),
      peppermintImg.forEach((el) => {
        el.style.opacity = 1;
      }),
      raspberryImg.forEach((el) => {
        el.style.opacity = 0;
      }),
      peachImg.forEach((el) => {
        el.style.opacity = 0;
      })
    );
  } else if (pos === 1) {
    return (
      (bgColor.style["background-image"] = "url(./src/raspberry-BG.jpg)"),
      (productsList.style["transform"] = "translateX(-130%)"),
      peppermintImg.forEach((el) => {
        el.style.opacity = 0;
      }),
      raspberryImg.forEach((el) => {
        el.style.opacity = 1;
      }),
      peachImg.forEach((el) => {
        el.style.opacity = 0;
      })
    );
  } else if (pos === 2) {
    return (
      (bgColor.style["background-image"] = "url(./src/peach-BG.jpg)"),
      (productsList.style["transform"] = "translateX(-260%)"),
      peppermintImg.forEach((el) => {
        el.style.opacity = 0;
      }),
      raspberryImg.forEach((el) => {
        el.style.opacity = 0;
      }),
      peachImg.forEach((el) => {
        el.style.opacity = 1;
      })
    );
  }
};

let onNextBtn = () => {
  ++position;

  if (position > maxPosition - 1) {
    position = 0;
  }
  styleChanged(position);
};
let onPrevBtn = () => {
  --position;

  if (position < 0) {
    position = maxPosition - 1;
  }
  styleChanged(position);
};

prevBtn.onclick = onPrevBtn;
nextBtn.onclick = onNextBtn;
