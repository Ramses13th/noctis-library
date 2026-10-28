type Artwork={file:string;alt:string};

// Keep artwork metadata lean: the generation manifest also contains long prompts.
const volumeArtwork:Record<string,Artwork>={
 temple:{file:'hello-kitty-gothic-temple.webp',alt:'Hello Kitty cu o cheie ornamentată și o fundă mov.'},
 gods:{file:'hello-kitty-gothic-gods.webp',alt:'Hello Kitty lângă un mic templu grecesc și o ramură de laur.'},
 meditation:{file:'hello-kitty-gothic-meditation.webp',alt:'Hello Kitty meditează pe o pernă de catifea, sub o semilună.'},
 magick:{file:'hello-kitty-gothic-magick.webp',alt:'Hello Kitty cu un grimoar deschis și o baghetă cu semilună.'},
 astrology:{file:'hello-kitty-gothic-astrology.webp',alt:'Hello Kitty cu un instrument astronomic argintiu și câteva stele.'},
 teachings:{file:'hello-kitty-gothic-teachings.webp',alt:'Hello Kitty citește un pergament lângă o pană și o călimară.'},
 community:{file:'hello-kitty-gothic-community.webp',alt:'Hello Kitty și Mimmy citesc împreună o carte, în rochii gotice.'},
 reference:{file:'hello-kitty-gothic-symbols.webp',alt:'Hello Kitty trasează un cerc cu un compas de geometrie.'},
};
const fallback:Artwork={file:'hello-kitty-gothic-reader.webp',alt:'Hello Kitty în rochie gotică, ținând o carte cu semn de panglică.'};

export function volumeArt(category:string,thumbnail=false):Artwork{
 const art=volumeArtwork[category]||fallback;
 return thumbnail?{...art,file:art.file.replace('.webp','-thumb.webp')}:art;
}

export const achievementArt:Artwork={file:'hello-kitty-gothic-achievement.webp',alt:'Hello Kitty cu o panglică de semn de carte mov și o carte închisă.'};
