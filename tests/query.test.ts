import {
    assertEquals,
    assertThrows,
} from "https://deno.land/std@0.179.0/testing/asserts.ts";
import { Query } from "../src/query.ts";

Deno.test("QUERY", async (t) => {
    await t.step("CREATE TABLE", () => {
        const bob = new Query();

        const sql = bob
            .table("test")
            .createTable(
                {
                    id: { type: "int", not_null: true, primary_key: true },
                    name: { type: "varchar(50)" },
                },
                {}
            )
            .bobTheBuilder();

        assertEquals(
            sql,
            "CREATE TABLE test (id int NOT NULL PRIMARY,name varchar(50) )"
        );
    });

    await t.step("UNSUPPORTED QUERY TYPE", () => {
        const bob = new Query();

        assertThrows(
            () => {
                bob.type("SELECT").bobTheBuilder();
            },
            TypeError,
            "Invalid query type SELECT"
        );
    });
});
