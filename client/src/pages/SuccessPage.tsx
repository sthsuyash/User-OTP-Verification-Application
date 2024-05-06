import { Container } from "@/components/Container"
import { MoveLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

function SuccessPage() {
    return (
        <Container className="flex flex-col space-y-5">
            <h1 className="text-green-500 font-semibold text-5xl">Code verified successfully!!</h1>
            <Link
                to="/"
                className="flex text-2xl items-center gap-2"
            ><MoveLeftIcon />Go Home
            </Link>
        </Container>
    )
}

export default SuccessPage