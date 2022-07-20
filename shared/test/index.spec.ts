import { greeter } from "@/index";

test("Should greet with the correct name", () => {
    expect(greeter()).toBe("Hello World");
});
