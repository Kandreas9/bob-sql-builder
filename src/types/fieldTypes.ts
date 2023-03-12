export interface FieldOptions {
    type: string;
    not_null?: boolean;
    primary_key?: boolean;
}

export interface Fields {
    [key: string]: FieldOptions;
}

export interface Defaults {
    [key: string]: any;
}
