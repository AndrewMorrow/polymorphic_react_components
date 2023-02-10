import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Text } from "components/Text";
import { Emphasis } from "components/Emphasis";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* Invalid Attribute Support */}
      <Text as="h1" href="https://github.com/">
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
