import Methods from "../Service/CookieService"

export default function SemToken() {
    Methods.delete('cart')
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-white-300 text-xl">Sem token</p>
        </div>
    )
}
