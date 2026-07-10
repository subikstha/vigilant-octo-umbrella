import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup); // Reset testing library after each tests

test("alt text renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );
  //   This render works like root.render that we have from React DOM

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const name = "My favorite Pizza";

  const screen = render(<Pizza name={name} description="super hot pizza" />);
  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
