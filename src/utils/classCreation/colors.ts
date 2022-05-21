import colorBake from "colorbake";

import { Data } from "../data/data.js";
//todo colors
export function isColor(input: string): boolean {
  if (
    /^(#[\dA-Fa-f]{1,8}$)/.test(input) ||
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^rgba?\((\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^hsla?\((\d+),\s*(\d+%),\s*(\d+%)(?:,\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^hsla?\((\d+)+\s*(\d+%)\s+(\d+%)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^hwb\((\d+)+\s*(\d+%)\s+(\d+%)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^lch\((\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^lab\((\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    )
  ) {
    return true;
  }
  return false;
}
export function areColors(inputs: string[]): boolean {
  for (const input of inputs) {
    if (!isColor(input)) {
      return false;
    }
  }
  return true;
}
export function getColorType(input: string): string {
  if (/(#[\dA-Fa-f]{1,8})/.test(input)) {
    return "hex";
  } else if (
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^rgba?\((\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    )
  ) {
    return "rgba";
  } else if (
    /^hsla?\((\d+),\s*(\d+%),\s*(\d+%)(?:,\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    ) ||
    /^hsla?\((\d+)+\s*(\d+%)\s+(\d+%)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    )
  ) {
    return "hsla";
  } else if (
    /^hwb\((\d+)+\s*(\d+%)\s+(\d+%)(?:\s*\/\s*(\d+(?:\.\d+)?)%?)?\*?\)$/.test(
      input
    )
  ) {
    return "hwb";
  } else {
    return "";
  }
}

export function setupProperColor(
  color: string,
  opacity: string,
  prefix: string,
  data: Data,
  colorBoolean = false
): string {
  if (colorBoolean || isColor(color)) {
    color = convertColorToProperFormat(color, data);
    color = updateColorOpacity(color, opacity, prefix, data);
  }
  return color;
}

export function convertColorToProperFormat(color: string, data: Data): string {
  //todo colorbake
  const colorFormat = data.config.colorFormat;
  if (colorFormat === "rgba") {
    color = colorBake(color).toString("rgb", { legacy: true });
  }
  return color;
}

/* -------------------------------------------------------------------------- */
/*                                   Opacity                                  */
/* -------------------------------------------------------------------------- */

export function updateColorOpacity(
  color: string,
  opacity: string,
  prefix: string,
  data: Data
): string {
  const colorType = getColorType(color);
  let permanent = false;
  if (opacity.includes("*")) {
    opacity = opacity.replace(/\*/g, "");
    permanent = !data.config.permanentOpacity;
  }
  switch (colorType) {
    case "rgba": {
      color = updateRgbaOpacity(color, opacity, permanent, prefix);

      break;
    }
    case "hsla": {
      color = updateHslaOpacity(color, opacity, permanent, prefix);

      break;
    }
    case "hex": {
      color = updateHexOpacity(color, opacity);
      break;
    }
    // No default
  }
  return color;
}

function updateRgbaOpacity(
  color: string,
  opacity: string,
  permanent: boolean,
  prefix: string
): string {
  const newValues = determineRgbaOpacity(color, opacity, permanent);
  opacity = newValues.opacity;
  if (!opacity) return color;
  color = newValues.color;
  permanent = newValues.permanent;
  const rgbaValuesCount = color.match(/[\d.]+/g)?.length;
  const opacitySeparator = /\d+\s+\d+\s+\d+\s*\/?\s*\d*/.test(color)
    ? " / "
    : ", "; //todo better test for new syntax

  if (rgbaValuesCount === 4) {
    color = permanent
      ? color.replace(
          /\s*[,/]\s*(\d*(\.|)(\d*|)\))/,
          opacitySeparator + opacity + ")"
        )
      : color.replace(
          /\s*[,/]\s*(\d*(\.|)(\d*|)\))/,
          opacitySeparator +
            "var(--ff-" +
            prefix +
            "-opacity, " +
            opacity +
            "))"
        );
  } else if (rgbaValuesCount === 3) {
    color = permanent
      ? color.replace(/\)/, opacitySeparator + opacity + ")")
      : color.replace(
          /\)/,
          opacitySeparator +
            "var(--ff-" +
            prefix +
            "-opacity, " +
            opacity +
            "))"
        );
  } else {
    return "";
  }
  color = color.replace(/,(?!\s)/g, ", ");
  return color;
}

function determineRgbaOpacity(
  color: string,
  opacity: string,
  permanent: boolean
): { color: string; opacity: string; permanent: boolean } {
  //test for arbitrary opacity, else divide by 100
  const rgbaValuesCount = color.match(/[\d.]+/g)?.length;
  if (opacity) {
    opacity = /\[[\d.]+]/.test(opacity)
      ? opacity.replace(/^\[|]$/g, "")
      : (Number.parseFloat(opacity) / 100).toString();
  } else if (rgbaValuesCount === 4) {
    const colorOpacityArray = color.match(/[\d.]+(?=\*?\)$)/g);
    if (colorOpacityArray && colorOpacityArray[0]) {
      opacity = colorOpacityArray[0];
    }
  }
  if (color.includes("*")) {
    color = color.replace(/\*/g, "");
    permanent = !permanent;
  }
  return { color: color, opacity: opacity, permanent: permanent };
}

function updateHslaOpacity(
  color: string,
  opacity: string,
  permanent: boolean,
  prefix: string
): string {
  const newValues = determineRgbaOpacity(color, opacity, permanent); //todo make this generic for alpha
  opacity = newValues.opacity;
  if (!opacity) return color;
  color = newValues.color;
  permanent = newValues.permanent;
  const rgbaValuesCount = color.match(/[\d.]+/g)?.length;
  const opacitySeparator = /(?:\d+%\s+){2}\d+%\s*\/?\s*\d*/.test(color)
    ? " / "
    : ", "; //todo better test for new syntax

  if (rgbaValuesCount === 4) {
    color = permanent
      ? color.replace(
          /\s*[,/]\s*(\d*(\.|)(\d*|)\))/,
          opacitySeparator + opacity + ")"
        )
      : color.replace(
          /\s*[,/]\s*(\d*(\.|)(\d*|)\))/,
          opacitySeparator +
            "var(--ff-" +
            prefix +
            "-opacity, " +
            opacity +
            "))"
        );
  } else if (rgbaValuesCount === 3) {
    color = permanent
      ? color.replace(/\)/, opacitySeparator + opacity + ")")
      : color.replace(
          /\)/,
          opacitySeparator +
            "var(--ff-" +
            prefix +
            "-opacity, " +
            opacity +
            "))"
        );
  } else {
    return "";
  }
  color = color.replace(/,(?!\s)/g, ", ");
  return color;
}

function updateHexOpacity(color: string, opacity: string): string {
  color = color.replace(/,\s*(\d*(\.|)(\d*|)\))/, ", " + opacity + ")");
  return color;
}
