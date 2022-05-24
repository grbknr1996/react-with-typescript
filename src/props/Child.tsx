interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi there {color} !!
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hi there {color} !!
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

ChildAsFc.defaultProps = {};
