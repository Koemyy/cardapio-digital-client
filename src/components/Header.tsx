interface headerContent {
    title: string,
    subtitle: string | null,
}

function Header({title, subtitle}: headerContent) {
    return(
        <div className="grid text-center justify-center py-4">
            <h1 className="text-orange-500 text-5xl">{title}</h1>
            <p className="text-black-500 pt-1">{subtitle}</p>
        </div>
    )
}

export default Header;
