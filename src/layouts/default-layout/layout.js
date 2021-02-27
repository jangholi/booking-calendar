import Header from './header'

function defaultLayout({children}) {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default defaultLayout