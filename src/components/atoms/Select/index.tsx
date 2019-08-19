import React from 'react';

export type SelectProps = React.SelectHTMLAttributes<any>;

const Select: React.FC<SelectProps> = props => <select {...props} />;

export default Select;
