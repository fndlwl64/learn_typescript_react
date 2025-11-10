import React from "react";

type TextOwnsProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    children: React.ReactNode;
    as?: E;
}

type TextProps<E extends React.ElementType> = TextOwnsProps<E> & 
    Omit<React.ComponentProps<E>, keyof TextOwnsProps<E>>;

export const Text = ({ size, color, children, as }: TextProps<React.ElementType>) => {
    const Component = as || 'div';
    return ( 
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    );
}