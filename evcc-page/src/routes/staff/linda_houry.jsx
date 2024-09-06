import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Rebecca_Yang from '../../components/images/people/Rebecca_Yang.jpg'

export default function Linda() {
    return (
        <>
            <Navbar page_name="Linda Houry" />
            <div class="Main-content">
                <div className="Staff-article">
                    <div className="Staff-img">
                        <img src={Rebecca_Yang} />
                    </div>
                    <div className="Staff-text">
                        <p>
                        Linda Houry is the accompanist for Class A for the 2024-2025 
                        school year. She was born in Taiwan and moved to the U.S. when 
                        she was 4. She started piano at that age. She has played 
                        regularly for worship services at the Immanuel Chinese Alliance 
                        Church in Reno, Nevada, and has accompanied their adult choir for 
                        special performances.
                        </p>
                        <p>
                        Linda has a background in traditional and digital art as well. She 
                        is helping to create promotional materials for EVCC this year and 
                        is happy for the opportunity to use music and art to serve.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}