import head from "../components/images/head.jpg"

export default function Headshot_info({ text, image }) {
    return (
        <>
            <div class="Headshot">
                <div class="Headshot-photo">
                    <img src={head}></img>
                </div>
                <div class="Headshot-info">
                    <h2>{text}</h2>
                </div>
            </div>

        </>
    )
}