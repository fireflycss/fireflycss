import { DataPart } from "./dataPart.js";

export function mergeData(target: DataPart, source: DataPart): DataPart {
  //support choice for replace or extend by default in config
  // by default do replace by default with support for extend key
  target = extendData(target, source);

  /*
  if(source.replace||!config.extendByDefault){
    target = replaceData(target,source)
  }
  */
  target = { ...target, ...source };
  return target;
}

function extendData(target: DataPart, source: DataPart): DataPart {
  if (!source.extend) return target;
  target = deepMerge(target, source.extend);
  delete source.extend;
  return target;
}
/*
?For nested extends, however will make source extend parent an empty object deleting target when joined
!REMOVE ME
function extendData2(target: DataPart, source: DataPart): DataPart {
  if (source["extend"]) {
    target = deepMerge(target, source.extend);
    delete source.extend;
  } else {
    const sourceKeys = Object.keys(source);
    for (const sourceKey of sourceKeys) {
      const newSource = source[sourceKey];

      if (typeof newSource !== "object" || Array.isArray(newSource)) continue;
      const newTarget = target[sourceKey];

      if (typeof newTarget === "object" && !Array.isArray(newTarget)) {

        target[sourceKey] = extendData(newTarget, newSource);
      }
    }
  }
  return target;
}
*/
function deepMerge(target: DataPart, source: DataPart): DataPart {
  for (const key of getKeys(source)) {
    const targetKeyData = target[key];
    const sourceKeyData = source[key];
    if (Array.isArray(sourceKeyData) && Array.isArray(targetKeyData)) {
      target = mergeArray(target, source, key);
    } else if (
      typeof targetKeyData === "object" &&
      typeof sourceKeyData === "object" &&
      !Array.isArray(targetKeyData) &&
      !Array.isArray(sourceKeyData)
    ) {
      target[key] = deepMerge(targetKeyData, sourceKeyData);
    } else if (sourceKeyData) {
      target[key] = sourceKeyData;
    }
  }
  return target;
}

function getKeys(source: DataPart): string[] {
  if (!source) return [];
  return Object.keys(source);
}

function mergeArray(target: DataPart, source: DataPart, key: string) {
  if (!target || !source) return target;
  if (Array.isArray(target[key])) {
    const targetKeyData = target[key];
    const sourceKeyData = source[key];
    if (!Array.isArray(targetKeyData) || !Array.isArray(sourceKeyData))
      return target;
    target[key] = [...targetKeyData, ...sourceKeyData];
  } else {
    const test = source[key];
    if (!test) return target;
    target[key] = test;
  }
  return target;
}
