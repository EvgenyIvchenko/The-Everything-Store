import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode,
  className?: string,

}

const Container = (props: ContainerProps) => {
  const { children, className } = props;

  return (
    <div className={clsx('max-w-[1588px] mx-auto px-4 md:px-6', className)}>
      {children}
    </div>
  )
}

export default Container
