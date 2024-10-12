import yanamiChan from './assets/yanami.jpg'

function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={yanamiChan}></img>
            <h2 className="card-title">This is my waifu</h2>
            <p className="card-text">I want this girl becomes real</p>
        </div>
    );
}

export default Card