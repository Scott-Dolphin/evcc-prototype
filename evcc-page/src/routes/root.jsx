import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Headshot_info from '../components/headshot_info';


export default function Root() {
  return (
    <>
      <Navbar page_name="East Valley Children's Choir" subtitle="東安兒童合唱圑" />
      <div class="Main-content">
        <Headshot_info text='"It is good to praise the Lord and make music to your name, O Most High" Psalm 92:1' image="head" />
        <div class="Calendar">
          <div class="Calendar-title">
            <h1>Upcoming Events</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}