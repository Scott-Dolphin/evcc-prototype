import head from "../components/images/head.jpg"
import Singer from "../components/images/people/Singer.jpg"

const imageMap = {
    'Singer': Singer,
};


export default function Headshot_info({ text, image }) {

    const getImage = (name) => {
        return imageMap[name] || head;
    }

    return (
        <>
            <div class="Headshot">
                <div class="Headshot-photo">
                    <img src={getImage(image)}></img>
                </div>
                <div class="Headshot-info">
                    <h2>{text}</h2>
                </div>
            </div>

        </>
    )
}