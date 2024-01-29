type Props = {
  children: string;
};

export const Header = ({ children }: Props) => {
  return <h1>{children}</h1>;
};
