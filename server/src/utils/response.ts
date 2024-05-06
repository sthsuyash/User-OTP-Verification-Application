class ApiResponse<T = null> {
    success: boolean
    message: string
    data?: T | null

    constructor(success: boolean, message: string, data?: T | null) {
        this.success = success
        this.message = message
        this.data = data
    }

    static success<T>(data: T | null, message = 'Success'): ApiResponse<T> {
        return new ApiResponse<T>(true, message, data)
    }

    static error<T>(
        message = 'Internal Server Error',
        data?: T | null
    ): ApiResponse<T> {
        return new ApiResponse<T>(false, message, data)
    }
}

export default ApiResponse