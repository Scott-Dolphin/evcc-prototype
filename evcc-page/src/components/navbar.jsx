

export default function Navbar({ page_name, subtitle }) {
    return (
        <>
            <div class="Banner">
                <div class="Navbar">
                    <li>
                        {/* todo: make these into buttons instead of links */}
                        <ul><a href="/">Logo</a></ul> 
                        <ul><a href="/mission">Mission</a></ul>
                        <ul><a href="/classes">Classes</a></ul>
                        <ul><a href="/registration">Registration</a></ul>
                        <ul><a href="/connect">Connect</a></ul>
                    </li>
                </div>
                <div class="Spacer"></div>
                <div class="Title">
                    <h1>{page_name}</h1>
                    <h2>{subtitle}</h2>
                </div>


            </div>
        </>
    )
}