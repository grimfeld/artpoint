const Heading = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return <h2 className={['text-2xl font-bold text-emerald-900', className].join(' ')}>{children}</h2>
}

export default Heading
