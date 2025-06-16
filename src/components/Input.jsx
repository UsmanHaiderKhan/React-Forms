export default function Input({id, label, errorMessage, ...props}) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input  id={id} {...props} />
            {errorMessage && (
                <div className="control-error">
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
