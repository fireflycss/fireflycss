export function determineDataType(input: string): string {
  //todo figure out why data was needed here
  let dataType = "";
  switch (true) {
    case /^[a-z-]+$/.test(input): {
      dataType = input.startsWith("f-") ? "function" : "keyword";

      break;
    }
    case /^[\d.]+(deg|grad|rad|turn)$/.test(input): {
      dataType = "angle";

      break;
    }
    case /^[\d.]+(s|ms)$/.test(input): {
      dataType = "time";

      break;
    }
    case /^[\d.]+[a-z]+$/.test(input): {
      dataType = "length";

      break;
    }
    case /^[\d.]+%$/.test(input): {
      dataType = "percentage";

      break;
    }
    case /^\d+$/.test(input): {
      dataType = "integer";

      break;
    }
    case /^[\d.]+$/.test(input): {
      dataType = "number";

      break;
    }
    case /^f-([\\a-z-]+\(.+\)$)/.test(input): {
      dataType = "function";

      break;
    }
    default: {
      dataType = "keyword";
    }
  }
  return dataType;
}
