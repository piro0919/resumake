type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;

declare module '@sweetalert/with-react';
