import { Verse } from '../types/gita';

export const VERSES_DATA: Verse[] = [
  // CHAPTER 1
  {
    id: "1.1",
    chapterNumber: 1,
    verseNumber: 1,
    speaker: "Dhritarashtra",
    devanagari: [
      "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।",
      "मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥"
    ],
    transliteration: [
      "dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ |",
      "māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||"
    ],
    wordBreakdown: [
      { sanskrit: "धर्मक्षेत्रे", transliteration: "dharma-kṣetre", root: "dharma+kṣetra (locative)", grammar: "Noun, loc. sing.", english: "in the sacred field of righteous order" },
      { sanskrit: "कुरुक्षेत्रे", transliteration: "kuru-kṣetre", root: "kuru+kṣetra (locative)", grammar: "Noun, loc. sing.", english: "in the historical field of Kurukshetra" },
      { sanskrit: "समवेताः", transliteration: "samavetāḥ", root: "sam+ava+i", grammar: "Past passive participle, nom. pl.", english: "assembled together" },
      { sanskrit: "युयुत्सवः", transliteration: "yuyutsavaḥ", root: "yudh (desiderative)", grammar: "Adj., nom. pl.", english: "desiring to fight / battle-eager" },
      { sanskrit: "मामकाः", transliteration: "māmakāḥ", root: "mama (pronominal)", grammar: "Adj., nom. pl.", english: "my own people (sons)" },
      { sanskrit: "पाण्डवाः", transliteration: "pāṇḍavāḥ", root: "pāṇḍu", grammar: "Noun, nom. pl.", english: "the sons of Pandu" },
      { sanskrit: "च", transliteration: "ca", grammar: "Conjunction", english: "and" },
      { sanskrit: "एव", transliteration: "eva", grammar: "Particle", english: "indeed / also" },
      { sanskrit: "किम्", transliteration: "kim", grammar: "Interrogative", english: "what?" },
      { sanskrit: "अकुर्वत", transliteration: "akurvata", root: "kṛ", grammar: "Imperfect 3rd person pl. mid.", english: "did they do?" },
      { sanskrit: "सञ्जय", transliteration: "sañjaya", grammar: "Vocative sing.", english: "O Sanjaya!" }
    ],
    translationEnglish: "Dhritarashtra said: O Sanjaya, assembled on the sacred field of Dharma, Kurukshetra, eager for combat, what did my sons and the sons of Pandu do?",
    translationHindi: "धृतराष्ट्र ने कहा: हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे और पाण्डु के पुत्रों ने क्या किया?",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The opening verse sets the cosmic contrast between Dharma (righteous duty) and Adharma. The blind king's opening word 'māmakāḥ' (mine) reveals the deep root of all human ignorance: the illusion of 'I and mine' (Ahamkāra and Mamatā) which blinds discernment."
      },
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "Kurukshetra is celebrated in the Vedas as a holy shrine where worship of the Divine dissolves evil. Dhritarashtra is anxious whether the holy atmosphere of the sacred field might soften the hearts of his sons or favor the righteous Pandavas."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The battlefield is not merely an external war in ancient India; it is the battleground of our own human mind. The conflict between our noble aspirations (Pandavas) and our egotistical desires (Kauravas) unfolds within us every day."
      }
    ],
    audioDurationSeconds: 16,
    tags: ["opening", "dharma", "battlefield", "existential"],
    coreInsight: "All human suffering begins when we divide the universe into 'mine' versus 'theirs' through egotistical attachment."
  },

  // CHAPTER 2
  {
    id: "2.14",
    chapterNumber: 2,
    verseNumber: 14,
    speaker: "Krishna",
    devanagari: [
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।",
      "आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥"
    ],
    transliteration: [
      "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ |",
      "āgamāpāyino 'nityās tāṁs titikṣasva bhārata ||"
    ],
    wordBreakdown: [
      { sanskrit: "मात्रास्पर्शाः", transliteration: "mātrā-sparśāḥ", root: "mātrā (sense organs) + sparśa (contact)", grammar: "Noun, nom. pl.", english: "contacts of the senses with their objects" },
      { sanskrit: "तु", transliteration: "tu", grammar: "Particle", english: "indeed / but" },
      { sanskrit: "कौन्तेय", transliteration: "kaunteya", grammar: "Vocative sing.", english: "O son of Kunti (Arjuna)" },
      { sanskrit: "शीतोष्ण-सुख-दुःख-दाः", transliteration: "śītoṣṇa-sukha-duḥkha-dāḥ", root: "śīta + uṣṇa + sukha + duḥkha + da", grammar: "Compound adj., nom. pl.", english: "givers of cold and heat, pleasure and pain" },
      { sanskrit: "आगम-अपायिनः", transliteration: "āgama-apāyinaḥ", root: "āgama (coming) + apāya (departing)", grammar: "Adj., nom. pl.", english: "having a beginning and an end / fleeting" },
      { sanskrit: "अनित्याः", transliteration: "anityāḥ", root: "a-nitya", grammar: "Adj., nom. pl.", english: "transient / non-permanent" },
      { sanskrit: "तान्", transliteration: "tān", grammar: "Pronoun acc. pl. masc.", english: "them" },
      { sanskrit: "तितिक्षस्व", transliteration: "titikṣasva", root: "tij (desiderative titikṣ)", grammar: "Imperative 2nd sing. mid.", english: "endure with courage / bear calmly" },
      { sanskrit: "भारत", transliteration: "bhārata", grammar: "Vocative sing.", english: "O descendant of Bharata" }
    ],
    translationEnglish: "O son of Kunti, the contact of the senses with external objects gives rise to cold and heat, pleasure and pain. They come and go, transient and impermanent. Endure them patiently, O Bharata.",
    translationHindi: "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख देने वाले इन्द्रिय और विषयों के संयोग तो उत्पत्ति-विनाशशील और अनित्य हैं, इसलिए हे भारत! तुम उनको सहन करो।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The senses (mātrā) touch the objects and produce sensations of joy and sorrow. None of these sensations belong to the Atman (true Self). Recognize them as ephemeral waves passing on the surface of the boundless ocean of consciousness."
      },
      {
        author: "Swami Vivekananda",
        school: "Integral Yoga",
        text: "Titiksha is the real forbearance. Bear all misery without even a thought of resentment, without lamentation or sorrow. That is true spiritual nobility. Pleasure and pain are two sides of the same coin."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "Modern neuro-resilience in an ancient verse: acknowledge physical discomfort, emotional swings, and changing fortune as temporary brain weather. Don't let passing atmospheric storms define your inner sanctuary."
      }
    ],
    audioDurationSeconds: 18,
    tags: ["resilience", "impermanence", "stoicism", "equanimity"],
    coreInsight: "Pleasure and pain are transient physical contacts; when you stop resisting change, you gain impenetrable peace."
  },

  {
    id: "2.20",
    chapterNumber: 2,
    verseNumber: 20,
    speaker: "Krishna",
    devanagari: [
      "न जायते म्रियते वा कदाचिन्",
      "नायं भूत्वा भविता वा न भूयः ।",
      "अजो नित्यः शाश्वतोऽयं पुराणो",
      "न हन्यते हन्यमाने शरीरे ॥"
    ],
    transliteration: [
      "na jāyate mriyate vā kadācin",
      "nāyaṁ bhūtvā bhavitā vā na bhūyaḥ |",
      "ajo nityaḥ śāśvato 'yaṁ purāṇo",
      "na hanyate hanyamāne śarīre ||"
    ],
    wordBreakdown: [
      { sanskrit: "न", transliteration: "na", grammar: "Negative particle", english: "not" },
      { sanskrit: "जायते", transliteration: "jāyate", root: "jan", grammar: "Pres. 3rd sing. mid.", english: "is born" },
      { sanskrit: "म्रियते", transliteration: "mriyate", root: "mṛ", grammar: "Pres. 3rd sing. mid.", english: "dies" },
      { sanskrit: "वा", transliteration: "vā", grammar: "Conjunction", english: "or" },
      { sanskrit: "कदाचित्", transliteration: "kadācit", grammar: "Indefinite adv.", english: "at any time / ever" },
      { sanskrit: "न अयम्", transliteration: "na ayam", grammar: "Pronoun", english: "nor does this" },
      { sanskrit: "भूत्वा", transliteration: "bhūtvā", root: "bhū", grammar: "Absolutive (gerund)", english: "having come to be" },
      { sanskrit: "भविता", transliteration: "bhavitā", root: "bhū", grammar: "Periphrastic future 3rd sing.", english: "cease to be again" },
      { sanskrit: "अजः", transliteration: "ajaḥ", root: "a-ja", grammar: "Adj. nom. sing. masc.", english: "unborn" },
      { sanskrit: "नित्यः", transliteration: "nityaḥ", grammar: "Adj. nom. sing.", english: "eternal / constant" },
      { sanskrit: "शाश्वतः", transliteration: "śāśvataḥ", grammar: "Adj. nom. sing.", english: "ever-existing / perpetual" },
      { sanskrit: "पुराणः", transliteration: "purāṇaḥ", grammar: "Adj. nom. sing.", english: "primeval / ageless" },
      { sanskrit: "न हन्यते", transliteration: "na hanyate", root: "han (passive)", grammar: "Passive pres. 3rd sing.", english: "is not killed" },
      { sanskrit: "हन्यमाने", transliteration: "hanyamāne", root: "han (participle)", grammar: "Locative sing. pres. pass. part.", english: "when being slain" },
      { sanskrit: "शरीरे", transliteration: "śarīre", root: "śarīra", grammar: "Noun, locative sing.", english: "in the physical body" }
    ],
    translationEnglish: "The Soul is never born, nor does it ever die; having once existed, it never ceases to be. Unborn, eternal, changeless, and primeval, it is not slain when the body is slain.",
    translationHindi: "यह आत्मा किसी काल में भी न तो जन्मता है और न मरता ही है; और न यह उत्पन्न होकर फिर होने वाला ही है; क्योंकि यह अजन्मा, नित्य, सनातन और पुरातन है, शरीर के मारे जाने पर भी यह नहीं मारा जाता।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The six modifications of material existence (birth, existence, growth, alteration, decay, death) apply only to the physical frame. The Pure Witness Consciousness (Atman) is unmodified, non-dual, and free from time."
      },
      {
        author: "Swami Vivekananda",
        school: "Integral Yoga",
        text: "Stand up and realize your infinite nature! You are not these weak bodies. Fire cannot burn you, water cannot drown you, swords cannot pierce you. You are the infinite, immortal Spirit."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "When grief and the existential dread of mortality strike, this verse provides the highest consolation: your core awareness was never minted and cannot be destroyed. Fear evaporates before eternal reality."
      }
    ],
    audioDurationSeconds: 22,
    tags: ["immortality", "atman", "death", "soul", "fearlessness"],
    coreInsight: "You are not a mortal body trying to have a spiritual experience; you are immortal consciousness observing a physical experience."
  },

  {
    id: "2.47",
    chapterNumber: 2,
    verseNumber: 47,
    speaker: "Krishna",
    devanagari: [
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
      "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥"
    ],
    transliteration: [
      "karmaṇy evādhikāras te mā phaleṣu kadācana |",
      "mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||"
    ],
    wordBreakdown: [
      { sanskrit: "कर्मणि", transliteration: "karmaṇi", root: "karman (locative)", grammar: "Noun, loc. sing.", english: "in prescribed action / work" },
      { sanskrit: "एव", transliteration: "eva", grammar: "Emphatic particle", english: "only / alone" },
      { sanskrit: "अधिकारः", transliteration: "adhikāraḥ", root: "adhi+kṛ", grammar: "Noun, nom. sing.", english: "right / entitlement / privilege" },
      { sanskrit: "ते", transliteration: "te", grammar: "Genitive sing.", english: "your" },
      { sanskrit: "मा", transliteration: "mā", grammar: "Prohibitive particle", english: "never / not" },
      { sanskrit: "फलेषु", transliteration: "phaleṣu", root: "phala (locative)", grammar: "Noun, loc. pl.", english: "in the fruits / outcomes" },
      { sanskrit: "कदाचन", transliteration: "kadācana", grammar: "Indefinite adv.", english: "at any time" },
      { sanskrit: "कर्म-फल-हेतुः", transliteration: "karma-phala-hetuḥ", root: "karman + phala + hetu", grammar: "Compound noun, nom. sing.", english: "motivated by the fruits of action" },
      { sanskrit: "भूः", transliteration: "bhūḥ", root: "bhū (aorist injunctive)", grammar: "Verb 2nd sing.", english: "let you be / become" },
      { sanskrit: "सङ्गः", transliteration: "saṅgaḥ", root: "sañj", grammar: "Noun, nom. sing.", english: "attachment" },
      { sanskrit: "अस्तु", transliteration: "astu", root: "as", grammar: "Imperative 3rd sing.", english: "let there be" },
      { sanskrit: "अकर्मणि", transliteration: "akarmaṇi", root: "a-karman", grammar: "Noun, loc. sing.", english: "in inaction / passivity" }
    ],
    translationEnglish: "You have a right only to work, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
    translationHindi: "तुम्हारा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तुम कर्मों के फल के हेतु मत बनो और तुम्हारी अकर्मण्यता (कर्म न करने) में भी आसक्ति न हो।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The desire for fruits produces bondage and mental fragmentation. When the mind is obsessed with future rewards, work becomes anxiety. Do duty as an offering of purified intellect."
      },
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "Perform every act as loving worship of the Supreme Lord. Dedicate the results unto Him. When the Lord is the author and recipient of all fruit, the worker is bathed in uninterrupted bliss."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The ultimate cure for performance anxiety, startup burnout, and paralysis: focus 100% of your energy on the process (the input), and detach your ego from the metric (the outcome). Action becomes pure, masterful flow."
      }
    ],
    audioDurationSeconds: 19,
    tags: ["karma yoga", "mastery", "flow", "detachment", "anxiety", "focus"],
    coreInsight: "True mastery is total devotion to the craft with zero addiction to applause or anxiety over the result."
  },

  {
    id: "2.62",
    chapterNumber: 2,
    verseNumber: 62,
    speaker: "Krishna",
    devanagari: [
      "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।",
      "सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥"
    ],
    transliteration: [
      "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate |",
      "saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate ||"
    ],
    wordBreakdown: [
      { sanskrit: "ध्यायतः", transliteration: "dhyāyataḥ", root: "dhyai (present part.)", grammar: "Genitive sing. masc.", english: "of one dwelling / contemplating" },
      { sanskrit: "विषयान्", transliteration: "viṣayān", root: "viṣaya", grammar: "Noun, acc. pl.", english: "upon the sense objects" },
      { sanskrit: "पुंसः", transliteration: "puṁsaḥ", root: "puṁs", grammar: "Noun, genitive sing.", english: "of a person" },
      { sanskrit: "सङ्गः", transliteration: "saṅgaḥ", root: "sañj", grammar: "Noun, nom. sing.", english: "attachment" },
      { sanskrit: "तेषु", transliteration: "teṣu", grammar: "Pronoun, loc. pl.", english: "in them" },
      { sanskrit: "उपजायते", transliteration: "upajāyate", root: "upa+jan", grammar: "Pres. 3rd sing. mid.", english: "is born / arises" },
      { sanskrit: "सङ्गात्", transliteration: "saṅgāt", grammar: "Ablative sing.", english: "from attachment" },
      { sanskrit: "सञ्जायते", transliteration: "sañjāyate", root: "sam+jan", grammar: "Pres. 3rd sing. mid.", english: "springs forth" },
      { sanskrit: "कामः", transliteration: "kāmaḥ", grammar: "Noun, nom. sing.", english: "intense craving / longing" },
      { sanskrit: "कामात्", transliteration: "kāmāt", grammar: "Ablative sing.", english: "from frustrated craving" },
      { sanskrit: "क्रोधः", transliteration: "krodhaḥ", grammar: "Noun, nom. sing.", english: "rage / anger" },
      { sanskrit: "अभिजायते", transliteration: "abhijāyate", root: "abhi+jan", grammar: "Pres. 3rd sing. mid.", english: "arises / flares up" }
    ],
    translationEnglish: "While contemplating sense objects, a person develops attachment for them; from attachment arises lustful craving, and from frustrated craving, wrath flares up.",
    translationHindi: "विषयों का चिन्तन करने वाले पुरुष की उन विषयों में आसक्ति हो जाती है, आसक्ति से उन विषयों की कामना (लालसा) उत्पन्न होती है और कामना में विघ्न पड़ने से क्रोध उत्पन्न होता है।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "Here the psychology of downfall is traced to its microscopic origin: innocent contemplation (Dhyana) of sensory impulses. Where attention lingers, subtle attachment binds; thwarted desire transforms into boiling rage."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The algorithm of cognitive entrapment. First you scroll and look (contemplation), then you obsess (attachment), then you need (craving), then when blocked, you explode in anxiety and resentment (anger)."
      }
    ],
    audioDurationSeconds: 17,
    tags: ["psychology", "addiction", "mind control", "anger", "desire"],
    coreInsight: "You become what your attention lingers upon. Master your first innocent glance, and you master your entire life destiny."
  },

  {
    id: "2.63",
    chapterNumber: 2,
    verseNumber: 63,
    speaker: "Krishna",
    devanagari: [
      "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः ।",
      "स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥"
    ],
    transliteration: [
      "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ |",
      "smṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||"
    ],
    wordBreakdown: [
      { sanskrit: "क्रोधात्", transliteration: "krodhāt", grammar: "Ablative sing.", english: "from anger / fury" },
      { sanskrit: "भवति", transliteration: "bhavati", root: "bhū", grammar: "Pres. 3rd sing.", english: "arises / occurs" },
      { sanskrit: "सम्मोहः", transliteration: "sammohaḥ", root: "sam+muh", grammar: "Noun, nom. sing.", english: "delusion / clouding of judgment" },
      { sanskrit: "सम्मोहात्", transliteration: "sammohāt", grammar: "Ablative sing.", english: "from delusion" },
      { sanskrit: "स्मृति-विभ्रमः", transliteration: "smṛti-vibhramaḥ", root: "smṛti (memory) + vi-bhram", grammar: "Compound noun, nom. sing.", english: "loss of memory of higher wisdom" },
      { sanskrit: "स्मृति-भ्रंशात्", transliteration: "smṛti-bhraṁśāt", grammar: "Ablative sing.", english: "from the decay of memory" },
      { sanskrit: "बुद्धि-नाशः", transliteration: "buddhi-nāśaḥ", root: "buddhi + naś", grammar: "Compound noun, nom. sing.", english: "ruin of intellect / discerning faculty" },
      { sanskrit: "बुद्धि-नाशात्", transliteration: "buddhi-nāśāt", grammar: "Ablative sing.", english: "from the ruin of intellect" },
      { sanskrit: "प्रणश्यति", transliteration: "praṇaśyati", root: "pra+naś", grammar: "Pres. 3rd sing.", english: "one is utterly ruined / lost" }
    ],
    translationEnglish: "From anger arises delusion; from delusion comes the loss of memory of one's higher truth. With loss of memory, the discerning intellect is destroyed; and with the ruin of intellect, a person is utterly lost.",
    translationHindi: "क्रोध से मूढ़भाव (अविवेक) उत्पन्न होता है, अविवेक से स्मरणशक्ति भ्रमित हो जाती है, स्मृतिभ्रम से बुद्धि (विवेक) का नाश हो जाता है और बुद्धि का नाश होने से मनुष्य अपनी स्थिति से गिर जाता है।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "Buddhi-nasa is the tragic extinction of humanity's divine gift: the capacity for self-reflection and discrimination between the Real and the Unreal. Once Buddhi is drowned in wrath, man operates on animal instinct."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The physiological cascade of the amygdala hijack: rage blinds the prefrontal cortex (delusion), you forget all moral principles and consequences (smriti-bhransha), reason collapses (buddhi-nasa), and you destroy your career, relations, and peace in minutes."
      }
    ],
    audioDurationSeconds: 18,
    tags: ["intellect", "self-control", "cognitive bias", "clarity"],
    coreInsight: "When anger hijacks your intellect, you become a puppet to chaos. Guard your discerning clarity above all treasures."
  },

  // CHAPTER 4
  {
    id: "4.7",
    chapterNumber: 4,
    verseNumber: 7,
    speaker: "Krishna",
    devanagari: [
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।",
      "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥"
    ],
    transliteration: [
      "yadā yadā hi dharmasya glānir bhavati bhārata |",
      "abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||"
    ],
    wordBreakdown: [
      { sanskrit: "यदा यदा", transliteration: "yadā yadā", grammar: "Adverbial relative", english: "whenever / at whatever time" },
      { sanskrit: "हि", transliteration: "hi", grammar: "Particle", english: "surely / indeed" },
      { sanskrit: "धर्मस्य", transliteration: "dharmasya", root: "dharma", grammar: "Noun, genitive sing.", english: "of righteous order / cosmic harmony" },
      { sanskrit: "ग्लानिः", transliteration: "glāniḥ", root: "glai", grammar: "Noun, nom. sing.", english: "decline / decay" },
      { sanskrit: "भवति", transliteration: "bhavati", grammar: "Pres. 3rd sing.", english: "takes place" },
      { sanskrit: "भारत", transliteration: "bhārata", grammar: "Vocative", english: "O descendant of Bharata" },
      { sanskrit: "अभ्युत्थानम्", transliteration: "abhyutthānam", root: "abhi+ud+sthā", grammar: "Noun, acc. sing.", english: "uprising / surge" },
      { sanskrit: "अधर्मस्य", transliteration: "adharmasya", root: "a-dharma", grammar: "Noun, genitive sing.", english: "of unrighteousness / chaos" },
      { sanskrit: "तदा", transliteration: "tadā", grammar: "Adverb", english: "then" },
      { sanskrit: "आत्मानम्", transliteration: "ātmānam", root: "ātman", grammar: "Noun, acc. sing.", english: "Myself" },
      { sanskrit: "सृजामि", transliteration: "sṛjāmi", root: "sṛj", grammar: "Pres. 1st sing.", english: "manifest / project forth" },
      { sanskrit: "अहम्", transliteration: "aham", grammar: "Pronoun nom. 1st sing.", english: "I" }
    ],
    translationEnglish: "Whenever there is a decline in righteousness, O Bharata, and a rampant surge of unrighteousness, at that time I manifest Myself into the world.",
    translationHindi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब ही मैं अपने रूप को रचता हूँ अर्थात साकार रूप से प्रकट होता हूँ।",
    commentaries: [
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "The descent of the Supreme is born of boundless love (Kripa) for humanity. When the virtuous are oppressed and spiritual vision is dimmed by materialistic darkness, the Divine takes form to heal the cosmos."
      },
      {
        author: "Swami Vivekananda",
        school: "Integral Yoga",
        text: "The Avatar is the lighthouse of history. Look at Krishna, Buddha, Christ. In dark epochs, cosmic truth coalesces into heroic divine power to awaken sleeping humanity."
      }
    ],
    audioDurationSeconds: 19,
    tags: ["avatar", "dharma", "divine promise", "hope"],
    coreInsight: "When moral darkness reaches its zenith, the universe self-corrects through the dawn of divine consciousness."
  },

  {
    id: "4.8",
    chapterNumber: 4,
    verseNumber: 8,
    speaker: "Krishna",
    devanagari: [
      "परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।",
      "धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥"
    ],
    transliteration: [
      "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām |",
      "dharma-saṁsthāpanārthāya sambhavāmi yuge yuge ||"
    ],
    wordBreakdown: [
      { sanskrit: "परित्राणाय", transliteration: "paritrāṇāya", root: "pari+trai", grammar: "Dative sing.", english: "for the complete protection and liberation" },
      { sanskrit: "साधूनाम्", transliteration: "sādhūnām", root: "sādhu", grammar: "Genitive pl.", english: "of the virtuous and noble" },
      { sanskrit: "विनाशाय", transliteration: "vināśāya", root: "vi+naś", grammar: "Dative sing.", english: "for the destruction" },
      { sanskrit: "च", transliteration: "ca", grammar: "Conjunction", english: "and" },
      { sanskrit: "दुष्कृताम्", transliteration: "duṣkṛtām", root: "dus+kṛ", grammar: "Genitive pl.", english: "of evil-doers" },
      { sanskrit: "धर्म-संस्थापन-अर्थाय", transliteration: "dharma-saṁsthāpana-arthāya", root: "dharma+sam+sthāp+artha", grammar: "Compound, dative sing.", english: "for firmly re-establishing righteousness" },
      { sanskrit: "सम्भवामि", transliteration: "sambhavāmi", root: "sam+bhū", grammar: "Pres. 1st sing.", english: "I manifest / appear" },
      { sanskrit: "युगे युगे", transliteration: "yuge yuge", root: "yuga", grammar: "Locative sing. repeated", english: "age after age / epoch to epoch" }
    ],
    translationEnglish: "For the protection of the good, for the destruction of the wicked, and for firmly re-establishing the cosmic order of Dharma, I appear age after age.",
    translationHindi: "साधु पुरुषों के उद्धार के लिए, पाप कर्म करने वालों के विनाश के लिए और धर्म की भलीभाँति स्थापना करने के लिए मैं युग-युग में प्रकट होता हूँ।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The re-establishment of Dharma means the restoration of spiritual discernment (Jnana) in human society so that souls may attain liberation."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "This cosmic promise invites every individual to become an instrument of Dharma. Wherever you eradicate deceit, stand up for the vulnerable, and speak truth, Krishna's mission lives through your hands."
      }
    ],
    audioDurationSeconds: 18,
    tags: ["justice", "protection", "divine mission", "epochs"],
    coreInsight: "Evil is inherently self-cannibalizing; truth and nobility are backed by the inexorable arc of cosmic law."
  },

  // CHAPTER 6
  {
    id: "6.5",
    chapterNumber: 6,
    verseNumber: 5,
    speaker: "Krishna",
    devanagari: [
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।",
      "आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥"
    ],
    transliteration: [
      "uddhared ātmanātmānaṁ nātmānam avasādayet |",
      "ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||"
    ],
    wordBreakdown: [
      { sanskrit: "उद्धरेत्", transliteration: "uddharet", root: "ud+hṛ (optative)", grammar: "Verb 3rd sing.", english: "one should elevate / lift up" },
      { sanskrit: "आत्मना", transliteration: "ātmanā", root: "ātman", grammar: "Instrumental sing.", english: "by one's own self" },
      { sanskrit: "आत्मानम्", transliteration: "ātmānam", root: "ātman", grammar: "Accusative sing.", english: "the self" },
      { sanskrit: "न", transliteration: "na", grammar: "Negative particle", english: "not" },
      { sanskrit: "अवसादयेत्", transliteration: "avasādayet", root: "ava+sad (causative optative)", grammar: "Verb 3rd sing.", english: "should allow to degrade / sink down" },
      { sanskrit: "आत्मा", transliteration: "ātmā", root: "ātman", grammar: "Nom. sing.", english: "the self" },
      { sanskrit: "एव", transliteration: "eva", grammar: "Emphatic particle", english: "alone" },
      { sanskrit: "हि", transliteration: "hi", grammar: "Particle", english: "for / indeed" },
      { sanskrit: "आत्मनः", transliteration: "ātmanaḥ", root: "ātman", grammar: "Genitive sing.", english: "of oneself" },
      { sanskrit: "बन्धुः", transliteration: "bandhuḥ", grammar: "Noun, nom. sing.", english: "the greatest friend / ally" },
      { sanskrit: "रिपुः", transliteration: "ripuḥ", grammar: "Noun, nom. sing.", english: "the worst enemy / adversary" }
    ],
    translationEnglish: "Elevate yourself through the power of your own mind; do not degrade yourself. For the mind alone is one's greatest friend, and the mind alone is one's fiercest enemy.",
    translationHindi: "अपने द्वारा अपना उद्धार करे और अपना पतन न होने दे; क्योंकि यह मनुष्य स्वयं ही अपना मित्र है और स्वयं ही अपना शत्रु है।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "No external savior can rescue you if your own mind is your enemy. The disciplined mind that obeys reason and higher wisdom is your true friend; the undisciplined mind that obeys petty senses is your lethal foe."
      },
      {
        author: "Swami Vivekananda",
        school: "Integral Yoga",
        text: "This is the clarion call of self-reliance! Do not weep, do not blame ancestors, gods, or society. You are the architect of your own character. Elevate yourself!"
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The definitive statement on internal locus of control. Stop waiting for someone to save you. Your self-talk, your discipline, and your habits will either be your most loyal partner or your most toxic tormentor."
      }
    ],
    audioDurationSeconds: 19,
    tags: ["self-reliance", "mindset", "elevation", "internal power"],
    coreInsight: "You are your own savior and your own jailer; the key is which voice in your mind you choose to obey."
  },

  // CHAPTER 9
  {
    id: "9.22",
    chapterNumber: 9,
    verseNumber: 22,
    speaker: "Krishna",
    devanagari: [
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।",
      "तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥"
    ],
    transliteration: [
      "ananyāś cintayanto māṁ ye janāḥ paryupāsate |",
      "teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||"
    ],
    wordBreakdown: [
      { sanskrit: "अनन्याः", transliteration: "ananyāḥ", root: "an-anya", grammar: "Adj., nom. pl.", english: "without otherness / with single-minded focus" },
      { sanskrit: "चिन्तयन्तः", transliteration: "cintayantaḥ", root: "cint (participle)", grammar: "Pres. part. nom. pl.", english: "contemplating / meditating" },
      { sanskrit: "माम्", transliteration: "mām", grammar: "Accusative 1st sing.", english: "upon Me" },
      { sanskrit: "ये जनाः", transliteration: "ye janāḥ", grammar: "Relative pronoun + noun", english: "those people who" },
      { sanskrit: "पर्युपासते", transliteration: "paryupāsate", root: "pari+upa+ās", grammar: "Pres. 3rd pl. mid.", english: "worship devoutly" },
      { sanskrit: "तेषाम्", transliteration: "teṣām", grammar: "Genitive pl.", english: "of them" },
      { sanskrit: "नित्य-अभियुक्तानाम्", transliteration: "nitya-abhiyuktānām", root: "nitya+abhi+yuj", grammar: "Genitive pl. part.", english: "who are perpetually unified in devotion" },
      { sanskrit: "योग-क्षेमम्", transliteration: "yoga-kṣemam", root: "yoga+kṣema", grammar: "Compound noun, acc. sing.", english: "securing what they lack (Yoga) and preserving what they have (Kshema)" },
      { sanskrit: "वहामि", transliteration: "vahāmi", root: "vah", grammar: "Pres. 1st sing.", english: "I personally carry / shoulder" },
      { sanskrit: "अहम्", transliteration: "aham", grammar: "Pronoun nom. 1st sing.", english: "I" }
    ],
    translationEnglish: "To those who worship Me with unconditional single-minded love, always absorbed in Me, I personally carry what they lack and preserve what they already possess.",
    translationHindi: "जो अनन्य भक्तजन मुझको चिन्तन करते हुए निष्काम भाव से भजते हैं, उन नित्य-युक्त पुरुषों का योगक्षेम (अप्राप्त की प्राप्ति और प्राप्त की रक्षा) मैं स्वयं वहन करता हूँ।",
    commentaries: [
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "Notice the word 'vahāmi' (I carry). Just as a loving mother carries food to her hungry child and protects her baby in her arms, God assumes full responsibility for the material and spiritual sustenance of His surrendered lovers."
      },
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "Yoga means acquiring spiritual realization; Kshema means the unbroken protection of that liberated state. For the enlightened seeker, the Divine Divine Order sustains everything needed for final liberation."
      }
    ],
    audioDurationSeconds: 20,
    tags: ["grace", "surrender", "divine providence", "peace", "protection"],
    coreInsight: "When you give your whole heart to the highest truth, the universe bends its laws to shoulder your burdens."
  },

  // CHAPTER 11
  {
    id: "11.32",
    chapterNumber: 11,
    verseNumber: 32,
    speaker: "Krishna",
    devanagari: [
      "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो",
      "लोकान्समाहर्तुमिह प्रवृत्ततः ।",
      "ऋतेऽपि त्वां न भविष्यन्ति सर्वे",
      "येऽवस्थिताः प्रत्यनीकेषु योधाः ॥"
    ],
    transliteration: [
      "kālo 'smi loka-kṣaya-kṛt pravṛddho",
      "lokān samāhartum iha pravṛttaḥ |",
      "ṛte 'pi tvāṁ na bhaviṣyanti sarve",
      "ye 'vasthitāḥ pratyanīkeṣu yodhāḥ ||"
    ],
    wordBreakdown: [
      { sanskrit: "कालः", transliteration: "kālaḥ", grammar: "Noun, nom. sing.", english: "Time / Death / the cosmic Destroyer" },
      { sanskrit: "अस्मि", transliteration: "asmi", root: "as", grammar: "Pres. 1st sing.", english: "I am" },
      { sanskrit: "लोक-क्षय-कृत्", transliteration: "loka-kṣaya-kṛt", root: "loka+kṣaya+kṛ", grammar: "Compound, nom. sing.", english: "the world-destroying power" },
      { sanskrit: "प्रवृद्धः", transliteration: "pravṛddhaḥ", root: "pra+vṛdh", grammar: "Past part., nom. sing.", english: "grown mighty / gigantic" },
      { sanskrit: "लोकान्", transliteration: "lokān", grammar: "Noun, acc. pl.", english: "these worlds" },
      { sanskrit: "समाहर्तुम्", transliteration: "samāhartum", root: "sam+ā+hṛ", grammar: "Infinitive", english: "to swallow up / absorb" },
      { sanskrit: "इह", transliteration: "iha", grammar: "Adverb", english: "here" },
      { sanskrit: "प्रवृत्तः", transliteration: "pravṛttaḥ", grammar: "Nom. sing.", english: "engaged / manifested" },
      { sanskrit: "ऋते अपि त्वाम्", transliteration: "ṛte 'pi tvām", grammar: "Preposition + particle + acc.", english: "even without you / even if you refrain" },
      { sanskrit: "न भविष्यन्ति", transliteration: "na bhaviṣyanti", grammar: "Future 3rd pl.", english: "they shall not survive" },
      { sanskrit: "सर्वे योधाः", transliteration: "sarve yodhāḥ", grammar: "Nom. pl.", english: "all the warriors" },
      { sanskrit: "प्रत्यनीकेषु", transliteration: "pratyanīkeṣu", grammar: "Locative pl.", english: "in the opposing ranks" }
    ],
    translationEnglish: "I am mighty Time, the cosmic destroyer of worlds, here engaged in devouring all creation. Even without your participation, none of the warriors assembled in the opposing ranks shall escape death.",
    translationHindi: "मैं लोकों का नाश करने वाला बढ़ा हुआ महाकाल हूँ। इस समय इन लोकों को नष्ट करने के लिए यहाँ प्रवृत्त हुआ हूँ। तुम्हारे युद्ध न करने पर भी प्रतिपक्षी सेनाओं में स्थित ये सब योद्धा नहीं बचेंगे।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "Kāla is the inexorable movement of cosmic destruction that dissolves all forms back into the formless Brahman. Time spares no king, no soldier, and no empire."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "The famous verse uttered by J. Robert Oppenheimer at the Trinity test. Arjuna realizes that his personal ego is not in control of cosmic destiny. Rise above your small self and act as a noble instrument (Nimitta-matram) of truth."
      }
    ],
    audioDurationSeconds: 22,
    tags: ["time", "vishvarupa", "cosmic awe", "destiny", "oppenheimer"],
    coreInsight: "Time devours all worldly empires; play your part courageously without the delusion that you control life and death."
  },

  // CHAPTER 18
  {
    id: "18.65",
    chapterNumber: 18,
    verseNumber: 65,
    speaker: "Krishna",
    devanagari: [
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।",
      "मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥"
    ],
    transliteration: [
      "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru |",
      "mām evaiṣyasi satyaṁ te pratijāne priyo 'si me ||"
    ],
    wordBreakdown: [
      { sanskrit: "मन्मनाः", transliteration: "mat-manāḥ", root: "mad+manas", grammar: "Compound adj., nom. sing.", english: "fix your mind upon Me" },
      { sanskrit: "भव", transliteration: "bhava", root: "bhū", grammar: "Imperative 2nd sing.", english: "become" },
      { sanskrit: "मद्भक्तः", transliteration: "mad-bhaktaḥ", root: "mad+bhakta", grammar: "Noun, nom. sing.", english: "devoted to Me" },
      { sanskrit: "मद्याजी", transliteration: "mad-yājī", root: "mad+yaj", grammar: "Noun, nom. sing.", english: "dedicated in worship to Me" },
      { sanskrit: "माम्", transliteration: "mām", grammar: "Accusative 1st sing.", english: "unto Me" },
      { sanskrit: "नमस्कुरु", transliteration: "namaskuru", root: "namas+kṛ", grammar: "Imperative 2nd sing.", english: "bow down in reverence" },
      { sanskrit: "माम् एव एष्यसि", transliteration: "mām eva eṣyasi", root: "i", grammar: "Future 2nd sing.", english: "unto Me alone you shall come" },
      { sanskrit: "सत्यम्", transliteration: "satyam", grammar: "Noun/adv., acc. sing.", english: "truly / in truth" },
      { sanskrit: "ते", transliteration: "te", grammar: "Dative sing.", english: "unto you" },
      { sanskrit: "प्रतिजाने", transliteration: "pratijāne", root: "prati+jñā", grammar: "Pres. 1st sing. mid.", english: "I pledge / I solemnly promise" },
      { sanskrit: "प्रियः असि मे", transliteration: "priyaḥ asi me", grammar: "Adj. nom. + verb + genitive", english: "for you are exceedingly dear to Me" }
    ],
    translationEnglish: "Fix your mind on Me, be devoted to Me, sacrifice for Me, and bow down to Me. You will come to Me alone. I promise you this in truth, for you are dearly beloved to Me.",
    translationHindi: "मुझमें मन वाला हो, मेरा भक्त बन, मेरा पूजन करने वाला हो और मुझको प्रणाम कर; ऐसा करने से तू मुझे ही प्राप्त होगा, यह मैं तुझसे सत्य प्रतिज्ञा करता हूँ, क्योंकि तू मेरा अत्यन्त प्रिय है।",
    commentaries: [
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "The heart of Krishna pours out in this verse. He makes a solemn covenant (pratijāne): you are not an insignificant speck in the void; you are dearly beloved to God. Anchor your thought in love, and your return to divine home is guaranteed."
      },
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "When all mental modifications (Vrittis) are imbued with the non-dual consciousness of the Supreme Self, separation dissolves into eternal unity."
      }
    ],
    audioDurationSeconds: 19,
    tags: ["love", "promise", "devotion", "beloved", "covenant"],
    coreInsight: "You are not an orphan of the cosmos; the Divine cherishes you and invites you into eternal embrace."
  },

  {
    id: "18.66",
    chapterNumber: 18,
    verseNumber: 66,
    speaker: "Krishna",
    devanagari: [
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।",
      "अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥"
    ],
    transliteration: [
      "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |",
      "ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||"
    ],
    wordBreakdown: [
      { sanskrit: "सर्व-धर्मान्", transliteration: "sarva-dharmān", root: "sarva+dharma", grammar: "Noun, acc. pl.", english: "all varieties of duties and religious dogmas" },
      { sanskrit: "परित्यज्य", transliteration: "parityajya", root: "pari+tyaj", grammar: "Absolutive (gerund)", english: "having surrendered / relinquished" },
      { sanskrit: "माम् एकम्", transliteration: "mām ekam", grammar: "Accusative 1st sing.", english: "unto Me alone" },
      { sanskrit: "शरणम्", transliteration: "śaraṇam", root: "śaraṇa", grammar: "Noun, acc. sing.", english: "for refuge / sanctuary" },
      { sanskrit: "व्रज", transliteration: "vraja", root: "vraj", grammar: "Imperative 2nd sing.", english: "come / take shelter" },
      { sanskrit: "अहम्", transliteration: "aham", grammar: "Pronoun nom. 1st sing.", english: "I" },
      { sanskrit: "त्वाम्", transliteration: "tvām", grammar: "Accusative 2nd sing.", english: "you" },
      { sanskrit: "सर्व-पापेभ्यः", transliteration: "sarva-pāpebhyaḥ", root: "sarva+pāpa", grammar: "Ablative pl.", english: "from all karmic sins and bondage" },
      { sanskrit: "मोक्षयिष्यामि", transliteration: "mokṣayiṣyāmi", root: "mokṣ (causative future)", grammar: "Future 1st sing.", english: "shall liberate / deliver" },
      { sanskrit: "मा शुचः", transliteration: "mā śucaḥ", root: "śuc (aorist injunctive)", grammar: "Verb 2nd sing.", english: "do not grieve / fear no more" }
    ],
    translationEnglish: "Abandon all varieties of dharmas and take refuge in Me alone. I shall liberate you from all karmic reactions and sins; do not grieve.",
    translationHindi: "सम्पूर्ण धर्मों को अर्थात् सम्पूर्ण कर्तव्य कर्मों को मुझमें त्यागकर तू केवल एक मुझ सच्चिदानन्दघन परमात्मा की ही शरण में आ जा। मैं तुझे सम्पूर्ण पापों से मुक्त कर दूँगा, तू शोक मत कर।",
    commentaries: [
      {
        author: "Adi Shankaracharya",
        school: "Advaita (Non-Dual)",
        text: "The Charama Shloka (Ultimate Verse) of the Gita. To abandon all dharmas means to transcend the identification with body, caste, ritual, and doership, knowing: 'I am the actionless Brahman.' That is true liberation."
      },
      {
        author: "Sri Ramanuja",
        school: "Bhakti (Devotion)",
        text: "This is the supreme doctrine of Prapatti (absolute self-surrender). When a soul realizes its utter inability to reach God through intellectual effort or ritual perfection alone, it casts itself into the ocean of divine mercy."
      },
      {
        author: "Modern Mind & Practical Dharma",
        school: "Practical Wisdom",
        text: "Stop over-complicating life with guilt, self-flagellation, and perfectionist anxiety. Drop your mental baggage at the feet of the Supreme. 'Mā śucaḥ'—grieve not, take a deep breath, and walk forward in peace."
      }
    ],
    audioDurationSeconds: 21,
    tags: ["ultimate surrender", "liberation", "prapatti", "grace", "moksha"],
    coreInsight: "When you surrender the burden of your ego to the Supreme, all cosmic guilt dissolves: Grieve no more."
  }
];
