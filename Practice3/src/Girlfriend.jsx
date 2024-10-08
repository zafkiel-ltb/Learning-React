
function Girlfriend(props){

    const gradeGirl = props.grade
    const itemList = props.items

    const listGirlfriend = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.score}</li>)

    return(
        <>
            <h3>{gradeGirl}</h3>
            <ol>{listGirlfriend}</ol>
        </>
    );

}
export default Girlfriend