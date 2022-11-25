import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { useUsersStore } from "@/stores/UserStore";
import * as userType from "@/types/userType";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("runs", () => {
  test("it works", () => {
    expect(true).toBe(true);
  });
});

describe("useUsersStore", () => {
  let store: ReturnType<typeof useUsersStore>;

  beforeEach(() => {
    store = useUsersStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("references a store", () => {
    expect(store).toBeDefined();
  });

  test("has empty users on init", () => {
    expect(store.userState.users).toStrictEqual([]);
  });

  const data: userType.UserType[] = [
    {
      id: "1",
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: "2",
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: "3",
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: "4",
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: "5",
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: "6",
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ];

  test("set user", async () => {
    await store.setUsers(data);

    const users = store.fetchUsers();
    expect(store.userState.users).toBe(users);
  });
});
