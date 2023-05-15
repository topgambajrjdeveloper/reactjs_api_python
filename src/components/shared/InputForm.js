import React from "react";
import { Input } from "semantic-ui-react";

export default function InputForm({
  id,
  name,
  value,
  onChange,
  type,
  className,
}) {
  return (
    <Input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
    />
  );
}
