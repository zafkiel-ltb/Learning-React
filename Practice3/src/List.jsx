
function List(props){

    const category = props.category
    const itemList = props.items

    const listItem = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.quantity} &nbsp;{item.calories}</li>)

    return(
        <>
            <h3>{category}</h3>
            <ol>{listItem}</ol>
        </>
    )
}

export default List