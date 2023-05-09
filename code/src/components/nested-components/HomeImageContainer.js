import plateBackgroundImage from "../../utils/images/fitnesshealth.png";
// import plateBackgroundImage from "../../utils/images/homepage2.jpg";

const IMAGE_ALT = "Image of healthy food from re-define me";

const HomeImage = () => {
    return (
        <aside className="home-image">
            <img src={plateBackgroundImage} alt={IMAGE_ALT} draggable={false} />

            <div className="blurred-color-bg-1"></div>
            <div className="blurred-color-bg-2"></div>
        </aside>
    )
}

export default HomeImage;