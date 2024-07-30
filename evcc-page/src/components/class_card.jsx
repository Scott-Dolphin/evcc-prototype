import head from "../components/images/head.jpg"


export default function Class_card({ class_name, image, description, instructor, accompianist }) {
    return (
        <>
            <div class="Class-card">
                <div class="Left">
                    <div class="Hover-container">
                        <img src={head} alt="portrait.jpg" />
                        <div class="Overlay">
                            <div class="Text">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Right">
                    <div class="Descriptions">
                        <h1>
                            {class_name}
                        </h1>
                    </div>
                    <div class="Portraits">
                        <div class="Instructor">
                            <img src={head} />
                            <p>{instructor}</p>
                        </div>
                        <div class="Instructor">
                            <img src={head} />
                            <p>{accompianist}</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}