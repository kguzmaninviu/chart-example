import './TermButtonItem.css';

const TermButtonItem = ({ title = '', onClick = () => '' }) => {
    return (
        <div className="buttonContainer">
            <button className="button" onClick={onClick}>{title}</button>
        </div>
    );
}

export default TermButtonItem;