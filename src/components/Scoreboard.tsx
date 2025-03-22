import S from './Counter/Components.module.css'

type ScoreboardProps = {
    maxValue: number
    currentValue: number
};
export const Scoreboard = ({maxValue, currentValue}: ScoreboardProps) => {
    const styledCount = {
        color: currentValue === maxValue ? 'red' : '',
        marginBottom: "20px",
    }

    const progressContainer = {
        width: "100%",
        height: " 10px",
        background: "#ddd",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "20px",
    }

    const progressBar = {
        height: "100%",
        background: "#ff4040",
        transition: "width 0.3s ease-in-out",
        width: `${(currentValue / maxValue) * 100}% `,
    }
    // const countContainer = {
    //     width: "350px",
    //     border: "1px solid #949494",
    //     padding: "10px"
    // }

    return (
        <div className={S.ScoreboardContainer}>
            <h2>Max value: {maxValue}</h2>
            <p style={styledCount}>Count: {currentValue}</p>
            <div style={progressContainer}>
                <div style={progressBar}></div>
            </div>
        </div>
    );
};