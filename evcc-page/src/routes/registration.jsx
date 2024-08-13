import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Registration() {
    return (
        <>
            <Navbar page_name="Registration"/>
            <div class="Main-content">
            <h1>Open Enrollment Fees (2024 - 2025)</h1>
            <p>Preparatory and Apprentice Choir (K - 3rd grade): $850 per year.</p>
            <p>Concert Choir (4th - 12th grade): $900 per year.</p>
            <br></br>

            <h1>Discounts:</h1>
            <p>Returning students:  -$100</p>
            <p>New student early bird discount (before 9/29/2024): -$20</p>
            <p>Each additional child (new student): -$10</p>
            <br></br>

        
            <iframe src="https://docs.google.com/forms/d/1dPhC8v62509QEK6vqQq7jft9rgqCnvMoERt3DU8IQgY/viewform"
                width="1263"
                height="9800"
            
            ></iframe>
            
            <p>*All discounts expires after 8/25/2024 unless stated otherwise.</p>
            <p>Registration deadline 9/30/2024.  After registration closes, we will accept students on a case by case basis.</p>

            </div>
            <Footer />
        </>
    )

}