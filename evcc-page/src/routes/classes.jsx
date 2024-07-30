import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Class_card from '../components/class_card'


export default function Classes() {
    return (
        <>
            <Navbar page_name="Our Programs"/>
            <div class="Main-content">
                <Class_card class_name="A Class" description="Pulvinar elementum integer enim neque volutpat.
                 Amet facilisis magna etiam tempor orci eu lobortis." instructor="Heidi Kuo" accompianist="Tsai-Hsio Ko"/>

                <Class_card class_name="B Class" description="Pulvinar elementum integer enim neque volutpat.
                 Amet facilisis magna etiam tempor orci eu lobortis."/>

                <Class_card class_name="Vocal Ensemble" description="Pulvinar elementum integer enim neque volutpat.
                 Amet facilisis magna etiam tempor orci eu lobortis."/>

                <Class_card class_name="Parent Choir" description="Pulvinar elementum integer enim neque volutpat.
                 Amet facilisis magna etiam tempor orci eu lobortis."/>
            </div>
            <Footer />
        </>
    )

}