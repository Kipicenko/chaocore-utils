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

function dateCompare(oneValue: Date, twoValue: Date): boolean {
    return baseCompare(oneValue.getTime(), twoValue.getTime());
}

function regexCompare(oneValue: RegExp, twoValue: RegExp): boolean {
    return baseCompare(oneValue.toString(), twoValue.toString());
}

function objectCompare(
    oneValue: Record<string, any>,
    twoValue: Record<string, any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneValue, twoValue)) return true;

    const oneValueKeys = getObjectKeys(oneValue);
    const twoValueKeys = getObjectKeys(twoValue);
    if (oneValueKeys.length !== twoValueKeys.length) return false;

    for (const key of oneValueKeys) {
        if (!twoValueKeys.includes(key)) return false;

        const isNotEqual = options.shallow
            ? !baseCompare(oneValue[key], twoValue[key])
            : !isEqual(oneValue[key], twoValue[key]);

        if (isNotEqual) return false;
    }

    return true;
}

function arrayCompare(
    oneValue: Array<any>,
    twoValue: Array<any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneValue, twoValue)) return true;

    if (oneValue.length !== twoValue.length) return false;
    for (let i = 0; i < oneValue.length; i++) {
        const isNotEqual = options.shallow
            ? !baseCompare(oneValue[i], twoValue[i])
            : !isEqual(oneValue[i], twoValue[i]);

        if (isNotEqual) return false;
    }
    return true;
}

function mapCompare(
    oneValue: Map<any, any>,
    twoValue: Map<any, any>,
    options: OptionsType,
): boolean {
    if (baseCompare(oneValue, twoValue)) return true;

    if (oneValue.size !== twoValue.size) return false;

    for (const [key, value] of oneValue) {
        if (!twoValue.has(key)) return false;

        const isNotEqual = options.shallow
            ? !baseCompare(value, twoValue.get(key))
            : !isEqual(value, twoValue.get(key));

        if (isNotEqual) return false;
    }
    return true;
}

function setCompare(oneValue: Set<any>, twoValue: Set<any>): boolean {
    if (baseCompare(oneValue, twoValue)) return true;

    if (oneValue.size !== twoValue.size) return false;

    for (const value of oneValue) {
        if (!twoValue.has(value)) return false;
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
