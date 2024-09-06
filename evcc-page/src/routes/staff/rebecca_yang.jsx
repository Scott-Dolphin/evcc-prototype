import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Rebecca_Yang from '../../components/images/people/Rebecca_Yang.jpg'

export default function Rebecca() {
    return (
        <>
            <Navbar page_name="Rebecca Yang" />
            <div class="Main-content">
                <div className="Staff-article">
                    <div className="Staff-img">
                        <img src={Rebecca_Yang} />
                    </div>
                    <div className="Staff-text">
                        <p>
                            Rebecca Yang is a freshman at Orange County School of the Arts,
                            and has had a passion for music since she was young. At the age of
                            seven, she began learning the piano and has performed as a soloist,
                            pianist in a worship team, and as a volunteer. She has also accompanied 
                            choirs, solo singers, and various instrumentalists. She feels very 
                            honored to accompany the East Valley Parent's Choir, serving the
                            community and dedicating her efforts to share music.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}