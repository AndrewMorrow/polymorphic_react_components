type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | "black";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

// <C extends React.ElementType = "span"> This takes in a generic and then constrains it to the React.ElementType for type safety. Then it sets a default value for the generic if the option property is not passed.
export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
