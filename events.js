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
                text: "9€ pro Spieler, 4€ optionales Mittagessen für Zuschauer",
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
        googleFotosUrl: "https://www.dropbox.com/scl/fo/66dx05myrg3ex4m7sc6jk/AAh-7_YMe40n-UeeXwaNSnk?rlkey=jedkdnb60g1javcyvo8qsvy7u&st=b3iydrea&dl=0", 
        albumPassword: "dankejesus"
    },














{
        id: "halle-2027",
        sport: "halle",
        title: "Hallen-Volleyball-Turnier 2027",
        datum: "2027-02-13T10:00:00", 
        ort: "Sporthalle Röttenbach",
        coverImage: "bilder/Hallen-Turnier-2027.png",
        description: "Unser Hallen-Turnier in der schönen Röttenbacher Halle. Wir freuen uns auf einen Tag voller spannender Partien, Gemeinschaft und Teamgeist!",
        
        // --- FLEXIBLE DETAILS (Jeder Block kann Text UND optional ein eigenes Bild haben!) ---
        details: [
		          
	    { 
                title: "", 
                text: "",
                image: "" // Bild 

            },
 { 
                title: "❗Turnierstart noch ausstehend❗", 
                text: "Ob das Turnier um 10 Uhr oder um 13 Uhr startet ist noch nicht sicher. Wir informieren Sie über unseren Newsletter, sobald wir nähere Informationen haben.",
                image: "" // Bild 

            },

            { 
                title: "🅿️ Parken", 
                text: "Das Parken ist NUR an den gekennzeichneten Orten möglich!",
                image: "bilder/Parken-Roettenbach.png" // Bild 
            },
		{ 
                title: "⏰ Ende", 
                text: "Geplantes Turnierende ist 18:00 Uhr.",
                image: "" // Bild 

            },


        ],

        
        // --- EXTERNE LINKS (Einfach Link eintragen oder "" leer lassen) ---
        mapsUrl: "https://maps.app.goo.gl/PPnHPKJBnDdUaJEYA", 
        turnierplanUrl: "", 

        // --- FOTO GALERIE (Nach dem Turnier) ---
        googleFotosUrl: "", 
        albumPassword: "blank"
    },
















	{
        id: "beach-2027", //halle oder beach
        sport: "beach", // halle oder beach
        title: "Beach-Volleyball-Turnier 2027",
        datum: "2027-06-05T10:00:00", 
        ort: "TS Herzogenaurach",
        coverImage: "bilder/Beach-Turnier-2027.png",
        description: "Unser Sommer-Turnier auf der schönen Anlage der TS Herzogenaurach. Wir freuen uns auf Sonne, Spaß und Gemeinschaft.",
        
        // --- FLEXIBLE DETAILS (Jeder Block kann Text UND optional ein eigenes Bild haben!) ---
        details: [
		          
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
        turnierplanUrl: "", 

        // --- FOTO GALERIE (Nach dem Turnier) ---
        googleFotosUrl: "", 
        albumPassword: "blank"
    },





];
