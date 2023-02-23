import React from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// typr for the as property that takes in a generic C
type AsProp<C extends React.ElementType> = {
  as?: C;
};

// Separate for readability | passes generic to AsProp<C> and sets a Generic for Props with P | This then omits all keys found in AsProp
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & {
  ref?: PolymorphicRef<C>;
};

// actual component props that are passed into the component
type ComponentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      color?: Rainbow | "black";
    }
  >;

type TextComponent = <C extends React.ElementType>(
  props: Props<C, ComponentProps<C>>
) => React.ReactElement | null;
// type Props<C extends React.ElementType> = React.PropsWithChildren<
//   TextProps<C>
// > &
//   Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

// type PropsWithAs<C, Props> = Props & AsProp<C>;

// Takes in a generic component r property and sets a default value for Props

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>;

// <C extends React.ElementType = "span"> This takes in a generic and then constrains it to the React.ElementType for type safety. Then it sets a default value for the generic if the option property is not passed.
const Text = <C extends React.ElementType = "span">(
  {
    as,
    children,
    color,
    style,
    ...restProps
  }: PolymorphicComponentPropsWithRef<C, ComponentProps<C>>,
  ref?: PolymorphicRef<C>
) => {
  const Component = as || "span";

  // passes in a style attribute but also allows user inline styles to work
  const customStyles = color ? { style: { ...style, color } } : {};

  return (
    <Component {...restProps} {...customStyles}>
      {children}
    </Component>
  );
};

// Text.displayName = "Text";

export default React.forwardRef(Text);
