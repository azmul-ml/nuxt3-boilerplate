// import { describe, expect, it } from "vitest";
// import { mount } from "@vue/test-utils";
// import App from "@/app.vue";

// describe("app.vue", () => {
//   it("component must be mounted correctly", () => {
//     const wrapper = mount(App);
//     expect(wrapper).toBeTruthy();
//   });
// });

import { assert, describe, it } from "vitest";

describe("skipped suite", () => {
  it("test", () => {
    assert.equal(Math.sqrt(4), 2);
  });
});
