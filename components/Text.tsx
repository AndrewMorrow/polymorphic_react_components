type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

// <C extends React.ElementType = "span"> This takes in a generic and then constrains it to the React.ElementType for type safety. Then it sets a default value for the generic if the option property is not passed.
export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
