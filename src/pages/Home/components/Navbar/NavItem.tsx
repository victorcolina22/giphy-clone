interface NavItemProps {
  children?: React.ReactNode;
  className: string;
}

export function NavItem({ children, className }: NavItemProps) {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
}

export default NavItem;
