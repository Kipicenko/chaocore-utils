import { isArray } from "@src/is-array";
import { isObject } from "@src/is-object";
import { isMap } from "@src/is-map";
import { isSet } from "@src/is-set";
import { isDate } from "@src/is-date";
import { isRegex } from "@src/is-regex";

type OptionsType = {
    shallow: boolean;
};

const getObjectKeys = Object.keys;
function getType(value: any): string {
    if (isArray(value)) return "is-array";
    if (isObject(value)) return "is-object";
    if (isMap(value)) return "is-map";
    if (isSet(value)) return "is-set";
    if (isDate(value)) return "is-date";
    if (isRegex(value)) return "is-regex";
    if (value === null) return "is-null";
    return typeof value;
}
function baseCompare(oneValue: any, twoValue: any): boolean {
    return Object.is(oneValue, twoValue);
}

function dateCompare(oneDate: Date, twoDate: Date): boolean {
    return baseCompare(oneDate.getTime(), twoDate.getTime());
}

function regexCompare(oneRegExp: RegExp, twoRegExp: RegExp): boolean {
    return baseCompare(oneRegExp.toString(), twoRegExp.toString());
}

function objectCompare(
    oneObject: Record<string, any>,
    twoObject: Record<string, any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneObject, twoObject)) return true;

    const oneValueKeys = getObjectKeys(oneObject);
    const twoValueKeys = new Set(getObjectKeys(twoObject));
    if (oneValueKeys.length !== twoValueKeys.size) return false;

    for (const key of oneValueKeys) {
        if (!twoValueKeys.has(key)) return false;

        const isNotEqual = options.shallow
            ? !baseCompare(oneObject[key], twoObject[key])
            : !isEqual(oneObject[key], twoObject[key]);

        if (isNotEqual) return false;
    }

    return true;
}

function arrayCompare(
    oneArray: Array<any>,
    twoArray: Array<any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneArray, twoArray)) return true;

    if (oneArray.length !== twoArray.length) return false;
    for (let i = 0; i < oneArray.length; i++) {
        const isNotEqual = options.shallow
            ? !baseCompare(oneArray[i], twoArray[i])
            : !isEqual(oneArray[i], twoArray[i]);

        if (isNotEqual) return false;
    }
    return true;
}

function mapCompare(
    oneMap: Map<any, any>,
    twoMap: Map<any, any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneMap, twoMap)) return true;

    if (oneMap.size !== twoMap.size) return false;

    for (const [key, value] of oneMap) {
        if (!twoMap.has(key)) return false;

        const isNotEqual = options.shallow
            ? !baseCompare(value, twoMap.get(key))
            : !isEqual(value, twoMap.get(key));

        if (isNotEqual) return false;
    }
    return true;
}

function setCompare(oneSet: Set<any>, twoSet: Set<any>): boolean {
    if (baseCompare(oneSet, twoSet)) return true;

    if (oneSet.size !== twoSet.size) return false;

    for (const value of oneSet) {
        if (!twoSet.has(value)) return false;
    }
    return true;
}

export function isEqual(
    oneValue: any,
    twoValue: any,
    options: OptionsType = { shallow: false },
): boolean {
    const opts: OptionsType = isObject(options) ? options : { shallow: false };

    const oneValueType = getType(oneValue);
    const twoValueType = getType(twoValue);
    if (oneValueType !== twoValueType) return false;

    switch (oneValueType) {
        case "is-array":
            return arrayCompare(oneValue, twoValue, opts);
        case "is-object":
            return objectCompare(oneValue, twoValue, opts);
        case "is-map":
            return mapCompare(oneValue, twoValue, opts);
        case "is-set":
            return setCompare(oneValue, twoValue);
        case "is-date":
            return dateCompare(oneValue, twoValue);
        case "is-regex":
            return regexCompare(oneValue, twoValue);
        default:
            return baseCompare(oneValue, twoValue);
    }
}
