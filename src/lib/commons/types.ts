import React, { ReactNode } from "react";

export interface DefaultAppProps {
  children?: ReactNode | GenericFn<ReactNode>;
  onChange?: GenericFn;
  style?: React.CSSProperties;
}

/**
 * Helper function to use children as functions with props as parameters
 * @param children
 * @param props
 * @returns
 */
export const fnAsChildren = <T extends unknown[] = unknown[]>(
  children: unknown,
  ...props: T
) => {
  return typeof children === "function" ? children(...props) : children;
};

export type GenericFn<R = void, A extends unknown[] = unknown[]> = (
  ...args: A
) => R | Promise<R>;
