import head from "../components/images/head.jpg"
import Hsun_Hsun from "../components/images/people/Hsun_Hsun.jpg"
import Rebecca_Yang from "../components/images/people/Rebecca_Yang.jpg"
import May_Fang from "../components/images/people/May_Fang.jpg"
import Tsai_Hsun_Ko from "../components/images/people/Tsai-Hsun_Ko.jpg"


const imageMap = {
    'Hsun_Hsun': Hsun_Hsun,
    'Rebecca_Yang': Rebecca_Yang,
    'May_Fang': May_Fang,
    'Tsai-Hsun_Ko': Tsai_Hsun_Ko,
};


export default function Class_card({ class_name, image, description, instructor="", accompianist="" }) {

    const getImage = (name) => {
        const key = name.replace(' ', '_');
        return imageMap[key] || head; // fallback if image not found
    }
    const getUrl = (name) => {
        const key = name.replace(' ', '_');
        const url = '/staff/' + key;
        return url.toLowerCase();
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
                        <a href={getUrl(instructor)}>{instructor}</a>
                    </div>
                    <div className="Instructor">
                        <img src={getImage(accompianist)} alt={accompianist} />
                        <a href={getUrl(accompianist)}>{accompianist}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
