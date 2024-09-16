// import logo from "./images/logo.jpg";
import logo from "./images/logo.png";
import banner_img from "./images/Website-parts/banner_img.jpg";


export default function Navbar({ page_name, subtitle }) {
    return (
        <>
            <div class="Banner">
                <div class="Navbar">
                    <a className="logo" href="/"><img src={logo} /></a>
                    <li>
                        {/* todo: make these into buttons instead of links */}
                        <ul><a href="/mission">Mission</a></ul>
                        <ul><a href="/classes">Classes</a></ul>
                        <ul><a href="/registration">Registration</a></ul>
                        <ul><a href="/connect">Connect</a></ul>
                    </li>
                </div>
                <div class="Spacer">
                    <img src={banner_img}/>
                </div>
                <div class="Title">
                    <h1>{page_name}</h1>
                    <h2>{subtitle}</h2>
                </div>


            </div>
        </>
    )
}