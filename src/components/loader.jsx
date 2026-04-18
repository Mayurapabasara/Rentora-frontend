export function Loader() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-accent-light)">

            <div className="flex flex-col items-center gap-4">

                {/* SPINNER */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-border rounded-full"></div>

                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* TEXT */}
                <p className="text-sm text-muted animate-pulse">
                    Loading, please wait...
                </p>

            </div> 
        </div>
    );
}