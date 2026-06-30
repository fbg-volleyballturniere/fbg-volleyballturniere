/* =========================================================================
   === TURNIER TERMINE & EVENTS ===
   Hier trägst du alle Turniere ein.
   ========================================================================= */

const TOURNAMENT_EVENTS = [

{
        id: "beach-2026",
        sport: "beach",
        title: "Beach-Volleyball-Turnier 2026",
        datum: "2026-07-25T10:00:00", 
        ort: "TS Herzogenaurach",
        coverImage: "bilder/Beach-Turnier-2026.png",
        description: "Unser Sommer-Turnier auf der schönen Anlage der TS Herzogenaurach. Wir freuen uns auf Sonne, Spaß und Gemeinschaft.",
        
        // --- FLEXIBLE DETAILS (Jeder Block kann Text UND optional ein eigenes Bild haben!) ---
        details: [
		{ 
                title: "💰 Startgebühr inkl. Mittagessen", 
                text: "9€ pro Spieler, 4€ pro Zuschauer",
                image: "" // Kein Bild für diesen Bereich
            },            

		{ 
                title: "🍎 Verpflegung & Essen", 
                text: "Mittagessen wird es vor Ort geben (im Preis enthalten). Für den Nachmittag können gerne Fingerfood / Snacks mitgebracht werden (kleiner Kühlschrank vor Ort).",
                image: "" // Bild für die Verpflegung
            },
	 { 
                title: "🥤Getränke", 
                text: "Es sind KEINE Getränke vor Ort erhältlich. Bitte selbst mitbringen!",
                image: "" // Bild 

            },
	    { 
                title: "", 
                text: "",
                image: "" // Bild 

            },
            { 
                title: "🅿️ Parken", 
                text: "Das Parken ist vor dem Sportheim möglich.",
                image: "bilder/Parken-Herzogenaurach.png" // Bild für den Turnierplan / Lageplan
            },
		{ 
                title: "⏰ Ende", 
                text: "Geplantes Turnierende ist 18:00 Uhr.",
                image: "" // Bild 

            },


        ],

        
        // --- EXTERNE LINKS (Einfach Link eintragen oder "" leer lassen) ---
        mapsUrl: "https://maps.app.goo.gl/PtVu3RWGQisEudbu9", 
        turnierplanUrl: "https://www.meinturnierplan.de/c/8ty2ubn4/beachvolleyball-turnier-25-07-2026/", 

        // --- FOTO GALERIE (Nach dem Turnier) ---
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "fbg"
    },



];