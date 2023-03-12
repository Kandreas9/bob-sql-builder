import { Fields } from "../types/fieldTypes.ts";

const parseFields = (fields: Fields | undefined) => {
    const res = [];

    for (const key in fields) {
        const string =
            `${key} ${fields[key].type} ` +
            (fields[key].not_null ? "NOT NULL " : "") +
            (fields[key].primary_key ? "PRIMARY" : "");

        res.push(string);
    }

    return res;
};

export default parseFields;
