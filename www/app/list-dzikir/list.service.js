// TODO: REDESIGN LIST DZIKIR

angular
  .module('DzikirCounter')
  .factory('ListDzikirService', ListDzikirService);

ListDzikirService.$inject = ['$state'];

function ListDzikirService($state) {
  return {
    getListDzikir: getListDzikir,
  };

  function getListDzikir() {
    var list = [{
      urutan: '1',
      klass: '',
      arab: ' أَسْتَغْفِرُ اللهَ العَظِيْمَ اَلَّذِي لآ إِلَهَ إِلَّا هُوَ اْلحَيُّ اْلقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ',
      latin: 'ASTAGHFIRULLOHAL_\'ADZHIIM(A) AL-LADZII LAA ILAAHA ILLAA HUWAL KHAYYUL QOYYUUMU WA ATUUBU ILAIH(I). (3x)',
    }, {
      urutan: '2',
      klass: '',
      arab: 'لاَ إِلَهَ إِلَّا اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ اْلمُلْكُ وَلَهُ اْلحَمْدُ يُحْيِي وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ ',
      latin: 'LA_ ILAHA ILLALLOHU WA\'HDAHULA_ SYARIIKALAH(U), LAHULMULKU WALAHUL\'HAMDU YU\'HYII WAYUMIITU WAHUWA \'ALA_KULLI SYAI\'IN(g)QODIIR(u). (Dibaca 3x)',
    }, {
      urutan: '3',
      klass: '',
      arab: 'اَللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ وَإِلَيْكَ يَعُوْدُ السَّلاَمُ، فَحَيِّنَا رَبَّنَا بِالسَّلاَمُ وَأَدْخِلْنَا اْلجَنَّةَ دَارَ السَّلاَمِ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ يَا ذَاالْجَلاَلِ وَاْلإِكْرَامِ',
      latin: 'ALLOHUMMA AN(g)TASSALA_MU WA MIN(g)KASSALA_MU WA ILAIKA YA\'UWDUSSALA_M(u), FAKHAYYINA_ ROBBANA_ BI_SSALA_MU WA ADKHILNALJANNATA DA_ROSSALA_MI TABA_ROKTA ROBBANA_ WA TA\'A_LAITA YA_DZA_LJALA_LI WAL IKRO_M(i)',
    }, {
      urutan: '4',
      klass: '',
      arab: 'أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ',
      latin: 'A\'UUDZU BI_LLAHIMINASY-SYAITHO_NIRROJIIM(i)',
    }, {
      urutan: '5',
      klass: '',
      arab: 'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ',
      latin: 'BISMILLAHIRRO\'HMANIRRO\'HIIM(i)',
    }, {
      urutan: '6',
      klass: '',
      arab: 'الْحَمْدُ ِللهِ رَبِّ اْلعَالَمِيْنَ. الرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ. اهْدِنَا الصِّرَاطَ اْلمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ اْلمَغْضُوْبِ عَلَيْهِمْ وَلاَ الضَآلِّيْنَ. آمِيْنَ',
      latin: 'AL\'HAMDULILLAHIROBBIL\'AaLAMIiN(i) - ARRO\'HMANIRRO\'HIM(i) - MALIKI YAWMIDDIiN(i) - IYYAKA NA\'BUDU WA IYYAKA NASTA\'IiN(u) - IHDINASH-SHIRO_THOLMUSTAQIiM(a) - SHIRO_THOLLADZIiNA AN\'AMTA \'ALAIHIM GHOIRILMAGH-DHUuBI \'ALAIHIM WALA_DHO_LLIiN(a) - AaMIiN(a).',
    }, {
      urutan: '7',
      klass: '',
      arab: 'وَإِلهُكُمْ إِلهٌ وَاحِدٌ لآ إِلهَ إِلَّا هُوَالرَّحْمنُ الرَّحِيْمُ. اَللهُ لآاِلهَ اِلاَّ هُوَاْلحَيُّ اْلقَيُّوْمُ ج لاَتَأْخُذُه سِنَةٌ وَلاَنَوْمٌ ط لَهُ مَافِى السَّموَاتِ وَمَافِى اْلاَرْضِ قلى مَنْ ذَالَّذِيْ يَشْفَعُ عِنْدَه اِلاَّبِاِذْنِه ط يَعْلَمُ مَابَيْنَ اَيْدِيْهِمْ وَمَاخَلْفَهُمْ ج وَلاَيُحِيْطُوْنَ بِشَيْئٍ مِنْ عِلْمِه اِلاَّبِمَاشَآءَ ج وَسِعَ كُرْسِيُّهُ السَّموَاتِ وَاْلاَرْضَ ج وَلاَيَؤدُهُ حِفْظُهُمَا وَهُوَالْعَلِيُّ الْعَظِيْمُ ',
      latin: 'WA ILAAHUKUM ILAAHUW WAA HIDU LAA ILAAHA ILLAA HUWAR ROHMAANUR ROHIIMU. ALLAAHU LAA ILAAHA ILLAA  HUWAL HAYYULQOYYUuM(u). LAA TA’KHUDZUHUU SINATUW WA LAA NAUUM. LAHUU MAA FISSAMAAWAATI WA MAA FIL ARDHI. MAN DZAL LADZII YASFA’U ‘INDAHUU ILLAA BI IDZNIHI. YA’LAMU MAA BAINA AIDIIHIM WA MAA KHALFAHUM. WA LAA YUHITHUUNA BI SYAI-IN MIN ‘ILMIHII ILLAA BI MAASYAA-A. WASI’A KURSIYYUHUSSAMAAWAATI WAL ARDHA. WA LAA YA-UDHUU HIFZHUHUMAA WAHUWAL ‘ALIYYUL AZHIIM',
    }, {
      urutan: '8',
      klass: '',
      arab: 'إلهي ربّي أنت مولانا',
      latin: 'Ilaahii robbii anta maulaanaa.',
    }, {
      urutan: '9',
      klass: 'Do Dzikir',
      arab: 'سُبْحَانَ اللهِ',
      latin: 'SUB\'HANALLOH',
      url: goTo,
    }, {
      urutan: '10',
      klass: 'Do Dzikir',
      arab: 'اَلْحَمْدُ ِللهِ',
      latin: 'AL\'HAMDULILLAH',
      url: goTo,
    }, {
      urutan: '11',
      klass: 'Do Dzikir',
      arab: 'اللهُ أَكْبَرُ',
      latin: 'ALLOHU AKBAR',
      url: goTo,
    }, {
      urutan: '12',
      klass: '',
      arab: 'الله أكبر كبيرا والحمد لله كثيرا وسبحان الله بكرة وأصيلا , لآ إله إلاّ الله وحده لا شريك له, له الملك وله الحمد يحي ويميت وهو على كلّ شيء قدير',
      latin: 'Allahuakbar kabiiran wal hamdulillahi katsiiran wasubhaanallaahi bukratan wa ashiilaa. Laa ilaaha illallaahu wahdahuu laa syariikalah lahul mulku walahul hamdu yuhyii wa yumiitu wahuwa alaa kullisyai in qadiir',
    }, {
      urutan: '13',
      klass: '',
      arab: 'بِسْمِ اللهِ الرَّحْمَنِ الرِّحِيْمِ. اَلْحَمْدُ ِللهِ رَبِّ الْعَالَمِيْنَ. حَمْدًا يُوَافِىْ نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ. يَارَبَّنَالَكَ الْحَمْدُ وَلَكَ الشُّكْرُ كَمَا يَنْبَغِىْ لِجَلاَلِ وَجْهِكَ وَعَظِيْمَ سُلْطَانِكَ',
      latin: 'Bismillaahirrahmaanirrahiim. Alhamdulillaahi rabbil ‘aalamiin. Hamday yu-waafii ni’amahuu wa yukaafi’umaziidah. Yaa rabbanaa lakalhamdu wa lakasy syukru ka-maa yambaghiilijalaaliwajhika wa azhiimisul-thaanik',
    }, {
      urutan: '14',
      klass: '',
      arab: 'اَللهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلى آلِ سَيِّدِنَا مُحَمَّدٍ. صَلاَةً تُنْجِيْنَابِهَا مِنْ جَمِيْعِ اْلاَهْوَالِ وَاْلآفَاتِ. وَتَقْضِىْ لَنَابِهَا جَمِيْعَ الْحَاجَاتِ.وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ. وَتَرْفَعُنَابِهَا عِنْدَكَ اَعْلَى الدَّرَجَاتِ. وَتُبَلِّغُنَا بِهَا اَقْصَى الْغَيَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِى الْحَيَاةِ وَبَعْدَ الْمَمَاتِ اِنَّهُ سَمِيْعٌ قَرِيْبٌ مُجِيْبُ الدَّعَوَاتِ وَيَاقَاضِىَ الْحَاجَاتِ.',
      latin: 'Allaahumma shalliwasallim ‘alaa sayyidinaa muhammaddiw wa’alaa aali sayyidinaa muhammad. Shala atan tun ajihnaa bihaa minjamii’il ahwaali wal afaat. wa taqdhii lanaa bihaa jamii’al haajaat. wa tuthahhirunaa bihaa min jamii’is sayyi’aat. watarfa ‘una a a bihaa ‘indaka ‘a’laddrajaat. wa tuballighunaa bihaaaqshal ghaayaati min jamii’il khairaatifil hayaatiwa ba’dal mamaat. Innahu samii’un qariibum mujibud da’awaat wayaa qaadhiyal haajaat',
    }, {
      urutan: '15',
      klass: '',
      arab: 'اَللهُمَّ اِنَّا نَسْئَلُكَ سَلاَمَةً فِى الدِّيْنِ وَالدُّنْيَا وَاْلآخِرَةِ وَعَافِيَةً فِى الْجَسَدِ وَصِحَّةً فِى الْبَدَنِ وَزِيَادَةً فِى الْعِلْمِ وَبَرَكَةً فِى الرِّزْقِ وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَحْمَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً بَعْدَ الْمَوْتِ. اَللهُمَّ هَوِّنْ عَلَيْنَا فِىْ سَكَرَاتِ الْمَوْتِ وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ الْحِسَابِ.',
      latin: 'Allaahumma Inna Nas’aluka salaamatan fiddiini Waddun-yaa wal aakhirah. Wa ‘aafiya-tan fil jasadi wa shihhatan fil badani wa ziyaadatan fil ilmi wa barakatan firrizqi wa taubatan qablal maut wa rahm atan ‘indalmaut wa maghfiratan ba’dal maut. Allaahumma hawwin ‘alainaa fil sakaraatil maut wan najaata minan naari wal ‘afwa ‘indal hisaab.',
    }, {
      urutan: '16',
      klass: '',
      arab: 'اَللهُمَّ اِنَّا نَعُوْذُبِكَ مِنَ الْعَجْرِ وَالْكَسَرِ وَالْبُخْلِ وَالْهَرَمِ وَعَذَابِ الْقَبْرِ',
      latin: 'Allaahumma innaa na’uudzu bika min al’ ajzi wal kasali wal bukhli wal harami wa ‘adzaabil qabri.',
    }, {
      urutan: '17',
      klass: '',
      arab: 'رَبَّنَااغْفِرْلَنَا ذُنُوْبَنَا وَلَوَالِدِيْنَا وَلِمَشَايِخِنَا وَلِمُعَلِّمِيْنَا وَلِمَنْ لَهُ حَقٌّ عَلَيْنَا وَلِمَنْ اَحَبَّ وَاَحْسَنَ اِلَيْنَا وَلِكَافَّةِ الْمُسْلِمِيْنَ اَجْمَعِيْنَ',
      latin: 'Rabbanagh firlanaa dzunuubanaa wa liwaaa lidiinaa walimasyaayikhinaa wa limu’alli-mienaa wa liman lahuu haqqun’ alain aa wa lim an ahabba wa ahsana ilainaa wa likaaffatil muslimun a ajma’iin',
    }, {
      urutan: '18',
      klass: '',
      arab: 'رَبَّنَا تَقَبَّلْ مِنَّا اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ وَتُبْ عَلَيْنَا اِنَّكَ اَنْتَ التَّوَّابُ الرَّحِيْمُ',
      latin: 'Rabbanaa taqabbal minnaa innaka antas samii’ul alim, wa tub ‘alainaa innaka antat ta wwa abur rahiim',
    }, {
      urutan: '19',
      klass: '',
      arab: 'رَبَّنَا أَتِنَا فِى الدُّنْيَا حَسَنَةً وَفِي اْلأَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّا',
      latin: 'Rabbanaa aatinaa fiddunnyaa hasanah, wa fil aakhirati hasanah, waqinaa ‘adzaa ban naar.',
    }, {
      urutan: '20',
      klass: '',
      arab: 'وَصَلَّى اللهُ عَلى سَيِّدِنَا مُحَمَّدٍ وَعَلى آلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ ِللهِ رَبِّ الْعَالَمِيْنَ',
      latin: 'Washallallaahu ‘alaa sayyidinaa muhamma-din wa’alaa allihiwa shahbihiiwa sallam, wal hamdu lillaahirabbil ‘aalamiin.',
    },

  ];
    return list;
  }

  function goTo() {
    console.log(this.arab);
    $state.go('main.dzikir', {
      arab: this.arab,
      latin: this.latin,
    });
  }
}
