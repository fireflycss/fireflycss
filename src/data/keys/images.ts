/*
Keys:
* images
* functionImages
*/
export default {
  images: { star: "url(star.png)" },
  functionImages: {
    // linear gradients
    gradient:
      "linear-gradient(var(--ff-gradient-to, 0),var(--ff-gradient-stops))",
    "gradient-to-t": "linear-gradient(to top, var(--ff-gradient-stops))",
    "gradient-to-tl": "linear-gradient(to top right, var(--ff-gradient-stops))",
    "gradient-to-l": "linear-gradient(to left, var(--ff-gradient-stops))",
    "gradient-to-bl":
      "linear-gradient(to bottom right, var(--ff-gradient-stops))",
    "gradient-to-b": "linear-gradient(to bottom, var(--ff-gradient-stops))",
    "gradient-to-br":
      "linear-gradient(to bottom left, var(--ff-gradient-stops))",
    "gradient-to-r": "linear-gradient(to right, var(--ff-gradient-stops))",
    "gradient-to-tr": "linear-gradient(to top left, var(--ff-gradient-stops))",
    // repeating linear gradients
    "repeat-gradient":
      "repeating-linear-gradient(var(--ff-gradient-to, 0),var(--ff-gradient-stops))",
    "repeat-gradient-to-t":
      "repeating-linear-gradient(to top, var(--ff-gradient-stops))",
    "repeat-gradient-to-tl":
      "repeating-linear-gradient(to top right, var(--ff-gradient-stops))",
    "repeat-gradient-to-l":
      "repeating-linear-gradient(to left, var(--ff-gradient-stops))",
    "repeat-gradient-to-bl":
      "repeating-linear-gradient(to bottom right, var(--ff-gradient-stops))",
    "repeat-gradient-to-b":
      "repeating-linear-gradient(to bottom, var(--ff-gradient-stops))",
    "repeat-gradient-to-br":
      "repeating-linear-gradient(to bottom left, var(--ff-gradient-stops))",
    "repeat-gradient-to-r":
      "repeating-linear-gradient(to right, var(--ff-gradient-stops))",
    "repeat-gradient-to-tr":
      "repeating-linear-gradient(to top left, var(--ff-gradient-stops))",
    // radial gradients
    "radial-gradient":
      "radial-gradient(var(--ff-radial-shape, ellipse) var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "ellipse-gradient":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "ellipse-gradient-at-t":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top, var(--ff-gradient-stops))",
    "ellipse-gradient-at-tl":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top left, var(--ff-gradient-stops))",
    "ellipse-gradient-at-l":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at left, var(--ff-gradient-stops))",
    "ellipse-gradient-at-bl":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom left, var(--ff-gradient-stops))",
    "ellipse-gradient-at-b":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom, var(--ff-gradient-stops))",
    "ellipse-gradient-at-br":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom right, var(--ff-gradient-stops))",
    "ellipse-gradient-at-r":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at right, var(--ff-gradient-stops))",
    "ellipse-gradient-at-tr":
      "radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top right, var(--ff-gradient-stops))",
    "circle-gradient":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "circle-gradient-at-t":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at top, var(--ff-gradient-stops))",
    "circle-gradient-at-tl":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at top left, var(--ff-gradient-stops))",
    "circle-gradient-at-l":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at left, var(--ff-gradient-stops))",
    "circle-gradient-at-bl":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom left, var(--ff-gradient-stops))",
    "circle-gradient-at-b":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom, var(--ff-gradient-stops))",
    "circle-gradient-at-br":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom right, var(--ff-gradient-stops))",
    "circle-gradient-at-r":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at right, var(--ff-gradient-stops))",
    "circle-gradient-at-tr":
      "radial-gradient(circle var(--ff-radial-size, farthest-corner) at top right, var(--ff-gradient-stops))",
    // repeating radial gradients
    "repeat-radial-gradient":
      "repeating-radial-gradient(var(--ff-radial-shape, ellipse) var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "repeat-ellipse-gradient":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-t":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-tl":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top left, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-l":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at left, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-bl":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom left, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-b":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-br":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at bottom right, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-r":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at right, var(--ff-gradient-stops))",
    "repeat-ellipse-gradient-at-tr":
      "repeating-radial-gradient(ellipse var(--ff-radial-size, farthest-corner) at top right, var(--ff-gradient-stops))",
    "repeat-circle-gradient":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at var(--ff-radial-x, 50%) var(--ff-radial-y, 50%), var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-t":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at top, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-tl":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at top left, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-l":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at left, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-bl":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom left, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-b":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-br":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at bottom right, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-r":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at right, var(--ff-gradient-stops))",
    "repeat-circle-gradient-at-tr":
      "repeating-radial-gradient(circle var(--ff-radial-size, farthest-corner) at top right, var(--ff-gradient-stops))",
    // conic gradients
    "conic-gradient":
      "conic-gradient(from var(--ff-conic-from, 0) at var(--ff-conic-x, 50%) var(--ff-conic-y, 50%), var(--ff-gradient-stops))",
    "conic-gradient-at-t":
      "conic-gradient(from var(--ff-conic-from, 0) at top, var(--ff-gradient-stops))",
    "conic-gradient-at-tl":
      "conic-gradient(from var(--ff-conic-from, 0) at top left, var(--ff-gradient-stops))",
    "conic-gradient-at-l":
      "conic-gradient(from var(--ff-conic-from, 0) at left, var(--ff-gradient-stops))",
    "conic-gradient-at-bl":
      "conic-gradient(from var(--ff-conic-from, 0) at bottom left, var(--ff-gradient-stops))",
    "conic-gradient-at-b":
      "conic-gradient(from var(--ff-conic-from, 0) at bottom, var(--ff-gradient-stops))",
    "conic-gradient-at-br":
      "conic-gradient(from var(--ff-conic-from, 0) at bottom right, var(--ff-conic-gradient-stops))",
    "conic-gradient-at-r":
      "conic-gradient(from var(--ff-conic-from, 0) at right, var(--ff-gradient-stops))",
    "conic-gradient-at-tr":
      "conic-gradient(from var(--ff-conic-from, 0) at top right, var(--ff-gradient-stops))",
  },
};
