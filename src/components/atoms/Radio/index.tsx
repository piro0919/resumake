import React from "react";

export type RadioProps = Exclude<React.InputHTMLAttributes<any>, "type">;

const Radio: React.FC<RadioProps> = props => <input {...props} type="radio" />;

export default Radio;
