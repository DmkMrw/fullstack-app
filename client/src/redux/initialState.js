const initialState = {
  products: [
    {
      id: 1,
      type: 'Gun',
      name: 'Glock 17',
      price: '600',
      brandNew: true,
      outOfStock: false,
      image: './images/products/glock17.jpg',
      starsRating: 4,
      description: "GLOCK 17 Gen5 jest najlepszym przykładem na to, że nieosiągalną dla konkurencji poprzeczkę można podnieść jeszcze wyżej. Najnowsza wersja pistoletu Glock zawiera ponad 20 modyfikacji konstrukcyjnych względem czwartej generacji. Zmiany obejmuja między innymi przeprojektowaną lufę dla jeszcze lepszej celności, niemal niezniszczalną powłokę nDLC, obustronne manipulatory (zrzut zamka), zmodyfikowany chwyt dla podniesienia ergonomii, poprawiony mechanizm spustowy. Zmiany te zapewniają niebywałą ergonomię, powtarzalność każdego strzału oraz co najważniejsze bezdyskusyjnie największą niezawodność w tej klasie pistoletów."
    },
    {
      id: 2,
      type: 'Gun',
      name: 'Glock 19X',
      price: '650',
      brandNew: true,
      outOfStock: false,
      image: './images/products/glock 19x.jpg',
      starsRating: 4,
      description: "Pierwszy na świecie pistolet „Crossover” - GLOCK 19X łączy w sobie najlepsze cechy dwóch najpopularniejszych pistoletów na świecie. Pełnowymiarowy szkielet GLOCK 17 i kompaktowy zamek GLOCK 19 połączone razem, stworzyły pistolet zdolny podołać każdemu zadaniu. GLOCK 19X jest pierwszym w historii Pistoletem marki GLOCK z kolorowym zamkiem, wykończonym ulepszoną powłoką nPVD. GLOCK 19X został wyposażony w nową lufę GLOCK Marksman Barrel (GMB), zapewniającą większą dokładność dzięki nowemu gwintowaniu i ulepszonej koronie. Ponadto zastosowano chwyt bez rowków na palce, dwustronną dźwignię zrzutu zamka oraz pętlę na smycz. Zmiany te zapewniają niebywałą ergonomię, powtarzalność każdego strzału oraz co najważniejsze bezdyskusyjnie największą niezawodność w tej klasie pistoletów. W zestawie z pistoletem znajduje się standardowy 17nabojowy magazynek oraz dwa magazynki 17 + 2 oraz pudełko w kolorze pistoletu."
    },
    {
      id: 3,
      type: 'Gun',
      name: 'Canik P120',
      price: '499',
      brandNew: false,
      outOfStock: false,
      image: './images/products/canik_p120.jpg',
      description: "Pełnowymiarowy, kurkowy pistolet (DA) w całości wykonany z metalu. W zestawie posiada dwa magazynki, ładowarka do magazynków, zestaw do czyszczenia oraz solidną plastikową walizkę do przenoszenia"
    },
    {
      id: 4,
      type: 'Gun',
      name: 'CZ P10 F',
      price: '400',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_p10f.png',
      description: "CZ P-10F to nowy pistolet w wykonaniu pełnowymiarowym. Pełnoprawny pistolet bojowy z pełnowymiarowym zamkiem i chwytem. Posiada mechanizm uderzeniowy typu strike fire i szkielet z tworzywa. Metalowe magazynki z możliwością przedłużenia powodują wzrost i tak już dużej pojemności. To na wskroś nowoczesna konstrukcja, posiadająca na bardzo dobrze pracujący spust, pozwlająca na strzelanie zarówno strzelcom lewo jak i prawo ręcznym przez zdublowanie dźwigni i możłiwość ich przełożenia (w zależności od wersji). Posiada wymienne okładki chwytu w celu lepszego ich dobrania i agresywne teksturowanie chwytu. Jedne z lepszych pistoletów obronnych w doskonałej cenie. "
    },
    {
      id: 5,
      type: 'Rifle',
      name: 'Aero Precison',
      price: '999',
      brandNew: true,
      outOfStock: false,
      image: './images/products/aero_precison.png',
      description: "Karabinek wyposażony jest w 10,5” lufę z gwintem 1:7 przeznaczony do amunicji z ciężką kulą, która przy tej długości lufy zapewni optymalne parametry balistyczne oraz stabilizację lotu pocisku. Lufa zakończona jest gwintem 1/2x28” na urządzenie wylotowe, z fabrycznie zamontowanym tłumikiem płomienia typu A2."
    },
    {
      id: 6,
      type: 'Rifle',
      name: 'Diamondback DB15',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/diamondback_db15.jpg',
      description: "Niezawodna broń oparta na karabinku szturmowym M4. Lufa długości 406 mm ze stali 4150 Cr Mov zapewnia zwartość i portatywność konstrukcji. Tłumik ognia CNC DBSB IV ogranicza płomień wylotowy. Krótki skok gwintu 1:8″ pozwala na celne strzelanie ciężkimi pociskami. Broń jest wyposażona w mechaniczne, składane przyrządy celownicze. Niska, długa szyna montażowa Picatinny pozwala na łatwe osadzenie celownika optycznego lub kolimatora. Ergonomiczny chwyt pistoletowy poprawia skład. Grzbiet kolby prowadzony jest na przedłużeniu linii lufy, ogranicza to podrzut broni po strzale. W karabinie zastosowano regulowaną kolbę. Komora zamkowa oraz osłona lufy wraz z szynami wykończone są w matowym, czarnym kolorze."
    },
    {
      id: 7,
      type: 'Rifle',
      name: 'MSBS Grot',
      price: '1199',
      brandNew: false,
      outOfStock: false,
      image: './images/products/grot.png',
      description: "POLSKA KONSTRUKCJA – MODUŁOWY SYSTEM BRONI STRZELECKIEJ – MSBS. Nowoczesny karabinek dla użytkownika cywilnego, produkowany zgodnie ze standardami jakościowymi stosowanymi dla produktów bojowych. Jest karabinkiem samopowtarzalnym centralnego zapłonu z mechanizmem spustowym umożliwiającym prowadzenie wyłącznie ognia pojedynczego."
    },
        {
      id: 8,
      type: 'Rifle',
      name: 'CZ Bren 2',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_bren_2.png',
      description: "System broni CZ BREN 2 jest jednym z najbardziej zaawansowanych na rynku globalnym. Jego zalety to prosta konstrukcja, wyjątkowa niezawodność, wysoka dokładność, niska waga, doskonała ergonomia i obustronne lub łatwe w regulacji elementy sterujące. Właściwości te są również w pełni zachowane w modelu półautomatycznym w popularnym kalibrze 223 Rem oraz 7,62x39. W porównaniu z wersją automatyczną, model ten nie ma opcji krótkiego ognia ciągłego, podczas gdy najbardziej znaczącą różnicą jest brak szyn montażowych na dole i po bokach. Umożliwia to użytkownikom dostosowanie i dostrojenie swoich modeli do własnych preferencji."
    },
        {
      id: 9,
      type: 'Rifle',
      name: 'Daniel Defense MK18',
      price: '1399',
      brandNew: false,
      outOfStock: false,
      image: './images/products/daniel_defense_mk18.png',
      description: "Karabinek Daniel Defense Mk18 daje Ci możliwości, które wykorzystują najbardziej elitarne siły specjalne wojsk USA. Flagowy model w ofercie karabinków Daniel Defense, który w Polsce zyskał grono wiernych użytkowników. Zostań jednym z nich! Karabinek zbudowany jest z najtrwalszych elementów wykorzystywanych przez Daniel Defense, został on sprawdzony przez najbardziej elitarne siły specjalne US SOCOM."
    },
        {
      id: 10,
      type: 'Gun',
      name: 'CZ Shadow 2',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_shadow_2.jpg',
      description: "Ceska Zbrojovka Shadow 2 to jeden z najpopularniejszych broni używanych w strzelectwie dynamicznym. Posiadają one mechanizm spustowy o sportowym charakterze (krótki reset i płynny tryb SA/DA). Broń CZ Shadow 2 w zawodach IPSC to pewność i niezawodność działania pod presją czasu i w nieustannym ruchu."
    },
        {
      id: 11,
      type: 'gun',
      name: 'CZ P10 S',
      price: '899',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_p10_s.jpg',
      description: "CZ P-10 S to najmniejszy pistolet z rodziny P-10, idealny do skrytego przenoszenia, obrony osobistej oraz pełnienia funkcji broni zapasowej. CZ P-10S to nowy pistolet w wykonaniu COMPACTOWYM. Ten malutki pistolet bojowy z pomniejszonym zamkiem i chwytem. Posiada mechanizm uderzeniowy typu strike fire i szkielet z tworzywa. Metalowe magazynki z możliwością przedłużenia powodują wzrost pojemności. To na wskroś nowoczesna konstrukcja, posiadająca na bardzo dobrze pracujący spust, pozwalająca na strzelanie zarówno strzelcom lewo jak i prawo ręcznym przez zdublowanie dźwigni i możliwość ich przełożenia (w zależności od wersji). Posiada wymienne okładki chwytu w celu lepszego ich dobrania i agresywne teksturowanie chwytu."
    },
    {
      id: 12,
      type: 'Rifle',
      name: 'Pac DMR',
      price: '1299',
      brandNew: true,
      outOfStock: false,
      image: './images/products/pac_dmr.jpg',
      description: "Działa w oparciu o bezpośrednie odprowadzanie gazów na suwadło (Direct Impingement) gdzie rozprężają się w tłoku wewnętrznym powodując ruch suwadła w tył i szczelne odryglowanie zamka. Dzięki liniowemu przekazywaniu gazów karabinki w systemie D.I. mają niski odrzut i podrzut. Karabinki PAC15 wyróżnia unikalna średnica otworu bocznego w lufie, dokładnie dopasowana do masy zespołu ruchomego. Przekłada się to na redukcję odrzutu i podrzutu przy zachowaniu wysokiej niezawodności karabinka PAC15."
    }
  ],
  user: null,
};

export default initialState;