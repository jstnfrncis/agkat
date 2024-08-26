import PropTypes from 'prop-types';

const Button = ({ type, variant, onClick, children, className }) => {
    const baseStyles = "flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 transition-all ";

    const variantStyles = {
        primary: "font-Manbold bg-accent text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] active-duration-75",
        secondary: "font-Manbold ring-1 ring-accent text-accent hover:bg-accent hover:text-white focus-visible:outline-accent"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    onClick: () => {},
    className: ''
};

export default Button;