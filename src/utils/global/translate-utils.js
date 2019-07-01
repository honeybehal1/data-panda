import { React, map, isArray, join } from "../../utils/general-imports";
import { I18n } from "react-redux-i18n";

export function translate(path, delimiter = '') {
    const translatePath = isArray ? path : [path];
    return join(map(translatePath, t => I18n.t(t)), delimiter);
}