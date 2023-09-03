import { FC, PropsWithChildren } from 'react';

const PusherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export { PusherContextProvider };
