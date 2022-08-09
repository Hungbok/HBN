
const availableFonts = [
  "Tahoma",
  "Great Vibes",
  "Georgia",
  "EB Garamond",
  "Jost",
  "Pattaya",
  "Playfair Display",
  "Roboto"
];

// Make the browser load the fonts if the API is available
if (window.document.fonts && window.document.fonts.load) {
  availableFonts.forEach((font) => window.document.fonts.load(`16px ${font}`));
}

document.getElementById("app").innerHTML = `
<h1 onClick="window.location.reload()">TTI</h1>
<h4>Text to Image</h4>
<form>
  <label>Enter text:
  <textarea type="text" id="text-input" placeholder="Please enter a text" autocomplete='off'></textarea>
  </label>
  <div id="text-count">(0 / 100)</div>
  <label>Font:
  <select id="font-select">
    ${availableFonts.map((font) => `<option>${font}</option>`).join("\n")}
  </select>
  </label>
</form>
<button type="button" id="generate-btn">Generate</button>
<div id="image-wrapper">
</div>
`;

const btn = document.getElementById("generate-btn");

btn.addEventListener("click", async () => {
  btn.setAttribute("disabled", "true");
  await generateImage();
  btn.removeAttribute("disabled");
});

const dpr = window.devicePixelRatio || 1;

async function generateImage() {
  const text = document.getElementById("text-input").value;
  const font = document.getElementById("font-select").selectedOptions[0]
    .textContent;

  const imageWrapper = document.getElementById("image-wrapper");

  if (!text) {
    return;
  }

  const imageBlob = await textToBitmap(text, font);

  const imageUrl = URL.createObjectURL(imageBlob);

  const image = new Image();
  image.src = imageUrl;
  imageWrapper.replaceChildren(image);

  requestAnimationFrame(() => {
    // scale down the rendered image based on the display DPR
    const currentHeight = image.getBoundingClientRect().height;
    image.style.height = `${currentHeight / dpr}px`;
  }, 0);
}

/**
 * To properly render the given text across different browser engines,
 * we initially set a large enough canvas and then vertically trim
 * the empty space.
 */
async function textToBitmap(text, font) {
  let canvas;
  let convertToBlob;

  const FONT_SIZE = 100;
  const VERTICAL_EXTRA_SPACE = 5;
  const HORIZONTAL_EXTRA_SPACE = 2;

  if ("OffscreenCanvas" in window) {
    canvas = new window.OffscreenCanvas(200, 200);
    convertToBlob = canvas.convertToBlob.bind(canvas);
  } else {
    canvas = window.document.createElement("canvas");

    convertToBlob = () =>
      new Promise((resolve) => {
        if (canvas.msToBlob && !canvas.toBlob) {
          // Edge and IE11

          const blob = canvas.msToBlob();

          resolve(blob);
        } else {
          canvas.toBlob(resolve);
        }
      });
  }

  const ctx = canvas.getContext("2d");

  ctx.textBaseline = "top";

  // scale up the font size by the DPR factor. When
  // rendering, we'll scale down the image by the same
  // amount.
  ctx.font = `${FONT_SIZE * dpr}px "${font}"`;

  // IE and Edge only returns width as part of measureText
  const {
    actualBoundingBoxLeft,
    actualBoundingBoxRight,
    fontBoundingBoxAscent,
    fontBoundingBoxDescent,
    actualBoundingBoxAscent,
    actualBoundingBoxDescent,
    width
  } = ctx.measureText(text);

  // Render a large canvas to handle edge cases with some cases with large
  // ascenders and descender strokes that otherwise could end up cropped out
  // 5 is chosen as a multiplier after trying out rendering multiple fonts on different
  // browser engines while keeping the necessary room before vertically trimming the
  // canvas to ensure proper rendering of text (VERTICAL_EXTRA_SPACE).
  // Horizontal trimming is also applied with a similar logic to handle edge cases there.
  const canvasHeight =
    Math.max(
      Math.abs(actualBoundingBoxAscent) + Math.abs(actualBoundingBoxDescent),
      (Math.abs(fontBoundingBoxAscent) || 0) +
        (Math.abs(fontBoundingBoxDescent) || 0)
    ) * VERTICAL_EXTRA_SPACE;
  canvas.height = canvasHeight;

  const canvasWidth =
    Math.max(width, Math.abs(actualBoundingBoxLeft) + actualBoundingBoxRight) *
    HORIZONTAL_EXTRA_SPACE;
  canvas.width = canvasWidth;
  ctx.textBaseline = "top";
  ctx.font = `${FONT_SIZE * dpr}px "${font}"`;
  // Do not start rendering the text at the very top of the canvas to
  // prevent cutting out ascender strokes on certain fonts.
  // 4 is chosen so that text starts being rendered at the upper half of
  // the canvas
  ctx.fillText(text, canvasWidth / 4, canvasHeight / 4);
  trimCanvas(canvas);

  return convertToBlob({
    type: "image/png"
  });
}

/*
 * Remove empty regions on a canvas
 *
 * Based on https://ourcodeworld.com/articles/read/683/how-to-remove-the-transparent-pixels-that-surrounds-a-canvas-in-javascript
 */
function trimCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const length = pixels.data.length;
  let topCoord = null;
  let bottomCoord = null;
  let leftCoord = null;
  let rightCoord = null;
  let x = 0;
  let y = 0;

  // Iterate over every pixel to find the highest
  // and where it ends on the vertical axis
  // Each pixel is represented as RGBA
  for (let i = 0; i < length; i += 4) {
    // We inspect the alpha channel to check
    // if the pixel is fully transparent or not
    if (pixels.data[i + 3] !== 0) {
      x = (i / 4) % canvas.width;
      y = Math.trunc(i / 4 / canvas.width);

      if (topCoord === null) {
        // Since we inspect from top to bottom,
        // the initial not-transparent pixel must
        // be the topBound one.
        topCoord = y;
      }

      if (leftCoord === null || x < leftCoord) {
        // Since we walk in the left-right top-bottom
        // direction, we need to find the lowest
        // x coordinate as the leftCoord
        leftCoord = x;
      }

      if (rightCoord === null || x > rightCoord) {
        // Since we walk in the left-right top-bottom
        // direction, we need to find the highest
        // x coordinate as the rightCoord
        rightCoord = x;
      }

      if (bottomCoord === null || bottomCoord < y) {
        bottomCoord = y;
      }
    }
  }

  // If some value was left as null we use 0
  topCoord = topCoord || 0;
  bottomCoord = bottomCoord || 0;
  leftCoord = leftCoord || 0;
  rightCoord = rightCoord || 0;

  // Calculate height and width. Add 20 pixels
  // for some negative space (i.e. padding) around
  // the canvas edges
  const trimHeight = bottomCoord - topCoord + 20;
  const trimWidth = rightCoord - leftCoord + 20;
  const trimmed = ctx.getImageData(leftCoord, topCoord, trimWidth, trimHeight);

  canvas.width = trimWidth;
  canvas.height = trimHeight;
  ctx.putImageData(trimmed, 10, 10);
}

$(document).ready(function() {
  $('#text-input').on('keyup', function() {
      $('#text-count').html("("+$(this).val().length+" / 100)");

      if($(this).val().length > 100) {
          $(this).val($(this).val().substring(0, 100));
          $('#text-count').html("(100 / 100)");
      }
  });
});
