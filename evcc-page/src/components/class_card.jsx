import head from "../components/images/head.jpg"
import Hsun_Hsun from "../components/images/people/Hsun_Hsun.jpg"
import Rebecca_Yang from "../components/images/people/Rebecca_Yang.jpg"


const imageMap = {
    'Hsun_Hsun': Hsun_Hsun,
    'Rebecca_Yang': Rebecca_Yang,
};


export default function Class_card({ class_name, image, description, instructor="", accompianist="" }) {

    const getImage = (name) => {
        const key = name.replace(' ', '_');
        return imageMap[key] || head; // fallback if image not found
    }

    return (
        <div className="Class-card">
            <div className="Left">
                <div className="Hover-container">
                    <img src={head} alt="portrait.jpg" />
                    <div className="Overlay">
                        <div className="Text">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Right">
                <div className="Descriptions">
                    <h1>{class_name}</h1>
                </div>
                <div className="Portraits">
                    <div className="Instructor">
                        <img src={getImage(instructor)} alt={instructor} />
                        <a>{instructor}</a>
                    </div>
                    <div className="Instructor">
                        <img src={getImage(accompianist)} alt={accompianist} />
                        <a>{accompianist}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
