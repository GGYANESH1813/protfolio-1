import * as React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  className?: string;
  style?: Record<string, any>;
  [key: string]: any;
}

export default function Image({
  src,
  alt,
  width,
  height,
  priority,
  className,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={style}
      {...props}
    />
  );
}
