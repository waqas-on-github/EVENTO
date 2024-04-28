
const H1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className={`text-3xl font-bold tracking-tighter lg:text-6xl`}> {children}</h1>
    )
}

export default H1