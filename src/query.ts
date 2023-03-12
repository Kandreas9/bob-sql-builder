import { Fields, Defaults } from "./types/fieldTypes.ts";
import parseFields from "./helpers/parseFields.ts";

type queryTypes = "CREATE TABLE" | "SELECT";

interface queryData {
    table?: string;
    type?: queryTypes;
    fields?: Fields;
    defaults?: Defaults;
}

export class Query {
    private query: queryData = {};

    type(queryType: queryTypes | undefined): Query {
        this.query.type = queryType;

        return this;
    }

    table(name: string): Query {
        this.query.table = name;

        return this;
    }

    createTable(fields: Fields, defaults: Defaults): Query {
        this.query.type = "CREATE TABLE";
        this.query.fields = fields;
        this.query.defaults = defaults;

        return this;
    }

    bobTheBuilder(): string {
        switch (this.query.type) {
            case "CREATE TABLE": {
                const valuesArray = parseFields(this.query.fields);

                return `${this.query.type} ${
                    this.query.table
                } (${valuesArray.join(",")})`;
            }
            default: {
                throw new TypeError(`Invalid query type ${this.query.type}`);
            }
        }
    }
}
