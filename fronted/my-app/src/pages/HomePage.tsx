import { Link } from "react-router"

export default function HomePage() {
    
    return (
        <div>
            <Link to={"/create"}><button>To create</button></Link>
            <Link to={"/map"}><button>go to map</button></Link>
            <Link to={"/all-cards"}><button>All cards</button></Link>
            <Link to={"/get-alert/:id"}><button>get alert </button></Link>
        </div>
    )
}
