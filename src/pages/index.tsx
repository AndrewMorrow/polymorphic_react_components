import Text from "components/Text";
import { Emphasis } from "components/Emphasis";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const ref2 = useRef<HTMLHeadingElement | null>(null);

  return (
    <main>
      {/* Invalid Attribute Support */}
      <Text
        as="h1"
        href="https://github.com/"
        color={"indigo"}
        style={{ backgroundColor: "white" }}
        ref={ref}
      >
        Hello CodeSandbox
      </Text>
      {/* Valid Attribute support */}
      <Text as="a" href="https://github.com/">
        Hello World
      </Text>
      {/* Type safety with no as prop */}
      <Text href="https://github.com/">No as Prop</Text>
      {/* Using a custom Component */}
      <Text as={Emphasis}>This is important</Text>
    </main>
  );
}
