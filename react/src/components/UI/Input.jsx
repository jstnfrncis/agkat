import PropTypes from 'prop-types';

function Input({
  label = 'Email',
  id = 'email',
  name = 'email',
  type = 'email',
  required = true,
  autoComplete = 'email',
  className = '',
  ...rest
}) {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="text-left block text-sm font-Manbold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={`px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-icons focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 font-Manregular ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
};

export default Input;