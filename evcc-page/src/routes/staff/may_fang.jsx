import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import May_Fang from '../../components/images/people/May_Fang.jpg'

export default function May() {
    return (
        <>
            <Navbar page_name="May Fang" />
            <div class="Main-content">
                <div className="Staff-article">
                    <div className="Staff-img">
                        <img src={May_Fang}/>
                    </div>
                    <div className="Staff-text">
                        <p>
                            May Fang was born in Taiwan where she attended Kuang Jen Catholic Schools 
                            (光仁天主教學校）before moving to the United States. She earned a master of 
                            music in piano performance and a master of music in piano accompanying with 
                            scholarships from San Francisco Conservatory of Music (舊金山音樂學院） where 
                            she studied with Paul Hersh and Timothy Bach.  She received a bachelor of 
                            music with dean award scholarship in piano performance from Oberlin 
                            Conservatory of music （奧柏林音樂學院）where she studied with Munique Duphil.  
                            She was the piano accompanist for both San Francisco Conservatory of Music 
                            and Skyline College Concert choir, and a piano instructor in Taiwanese 
                            American Center of Northern California before moving to Los Angeles. She 
                            continued pursuing the study as a merit scholarship student in Graduate 
                            Performance Certificate of Keyboard Collaborative Arts in University of 
                            Southern California, and served as a piano accompanist in Occidental College, 
                            as well as several choirs including Taiwanese Presbyterian Conference Master 
                            Chorale , Half Step choir, Herald Christian Center Choir and Formosan 
                            Presbyterian Church in Los Angeles.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}