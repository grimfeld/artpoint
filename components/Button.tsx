import React from 'react'

const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string, onClick?: () => void }): JSX.Element => {
  return <button className={["px-4 py-2 font-bold text-white rounded bg-emerald-500 hover:bg-emerald-700", className].join(' ')} {...props}>{children}</button>
}

export default Button