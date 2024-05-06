import errorImage from "@/assets/images/404.svg";

function ErrorPage() {
    return (
        <div className="flex items-center justify-center px-5 sm:px-0">
            <div className="text-center">
                <img
                    className="mx-auto mb-4"
                    src={errorImage}
                    alt="404 Not Found"
                    width={500}
                    height={500}
                />
                <h1 className="text-5xl lg:text-3xl font-bold text-primary mb-3">
                    404 <span className="block text-4xl">Not Found</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm md:text-xl">
                    Whoops! The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;