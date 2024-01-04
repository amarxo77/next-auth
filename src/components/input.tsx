interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ value, onChange, ...otherProps }: InputProps) {
  return (
    <input
      type={otherProps.type ?? 'text'}
      {...otherProps}
      className='rounded-md bg-bgSoft p-2 text-white'
    />
  );
}
