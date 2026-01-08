

export function Header() {
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Bonjour Sophie, voici l'impact de vos recrutements sécurisés.
                </h1>
                <p className="text-gray-500 mt-1">Janvier 2026</p>
            </div>

            {/* Optional: Add Logo if needed here, but it's in sidebar usually. Or L'Oreal logo here? */}
            {/* Based on spec: Header (Haut, 85% largeur) */}
            <img
                src="/loreal-logo.png"
                alt="L'Oréal Paris"
                className="h-8 w-auto object-contain opacity-80"
            />
        </div>
    );
}
