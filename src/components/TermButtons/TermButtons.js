import TermButtonItem from '../TermButtonItem/TermButtonItem';
import './TermButtons.css';

const TermButtons = ({ terms, onPressTerms }) => {
    const shouldRenderTerms = !!terms && terms.length > 0;
    return shouldRenderTerms ? (
        <div className="buttonsContainer">
            {terms.map((term, index) => {
                return (
                    <TermButtonItem key={`${term.title}-${index}`} title={term.title} onClick={() => onPressTerms(index)} />
                )
            })}
        </div>
    ): <p>Invalid Terms</p>;
}

export default TermButtons;