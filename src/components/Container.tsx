
const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col min-h-screen  justify-center bg-blue-950/[11%]" >{children}</div>
    )
}

export default Container