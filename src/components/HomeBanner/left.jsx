const Left = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img
                src='/src/assets/fireball.png'
                alt="Description of the image"
                className="w-64 h-64 object-cover mt-4"
            />
            <div className="coiny-font text-primary text-5xl">HOOOOPS!</div>
        </div>
    )
}

export default Left;