
function ProfilePicture(){
    const imageUrl = './src/assets/yanami.jpg'

    const handleClickImage = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClickImage(e)} src={imageUrl}></img>);
}
export default ProfilePicture