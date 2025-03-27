import { Book } from '../types/Book';

// This is your book data template - you can easily add more books by adding to this array
export const books: Book[] = [
  // Aqeedah Books (Already in your collection)
  {
    id: 'usool-thalatha',
    title: 'Al-Usool Ath-Thalatha (The Three Fundamental Principles)',
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1750',
    description:
      'A fundamental text covering the three principles every Muslim must know: who is your Lord, what is your religion, and who is your Prophet.',
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-11-15T10:00:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Three-Fundamental-Principles-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'uthaymeen-explanation',
          title: 'Explanation by Shaykh Ibn Uthaymeen',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/Exp.-of-the-Three-Fundamental-Principles-of-Islaam-Sh.-al-Uthaymeen-compressed.pdf',
        },
      ],
      videos: [
        {
          id: 'main-playlist',
          title: 'Video Explanation by Imam Sajid',
          url: 'https://www.youtube.com/playlist?list=PLY8If6OHclJazbAN0iN_LTIpShEqB_iBg',
        },
      ],
    },
  },
  {
    id: 'qawaid-arba',
    title: "Al-Qawa'id Al-Arba'ah (The Four Rules)",
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1750',
    description:
      'The Four Rules is a short treatise which explains the severity of shirk and how it is that people come to fall into it.',
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-10-20T14:30:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Four-Principles-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'ibn-baz-explanation',
          title: 'Explanation by Shaykh Ibn Baz',
          author: 'Abdul Aziz ibn Abdullah ibn Baz',
          pdfUrl:
            'https://darpdfs.org/storage/2023/02/An-Explanation-of-the-Four-Principles-of-Shirk-Sh.-Ibn-Baaz.pdf',
        },
      ],
    },
  },
  {
    id: 'kitab-tawheed',
    title: 'Kitab At-Tawhīd (The Book of Monotheism)',
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1740',
    description:
      'The Book of Monotheism is one of the most important works in Islamic theology, addressing the concept of Tawheed (oneness of Allah).',
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-11-01T10:00:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Book-of-Tawhid-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'sadi-explanation',
          title: "Explanation by Shaykh As-Sa'di",
          author: "Abdur Rahman ibn Nasir as-Sa'di",
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/Exp.-of-Kitab-al-Tawhid-Sh.-Abd-al-Rahman-al-Sadi-compressed.pdf',
        },
        {
          id: 'fawzan-explanation',
          title: 'Explanation by Shaykh Al-Fawzan',
          author: 'Salih Al-Fawzan',
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/12/Concise-Commentary-on-the-Book-of-Tawhid-Sh.-Salih-Al-Fawzan.pdf',
        },
      ],
      videos: [
        {
          id: 'main-playlist',
          title: 'Video Explanation Series',
          url: 'https://www.youtube.com/playlist?list=PLExCKwROz20EF6lzoi_wvGgTqYkq7e3Of',
        },
      ],
    },
  },
  {
    id: 'nawaqid-islam',
    title: 'Nawaqid Al-Islam (The Nullifiers of Islam)',
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1750',
    description:
      "A concise text outlining the ten actions that nullify one's Islam, helping Muslims to safeguard their faith.",
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-09-05T08:15:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Nullifiers-of-Islam-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'badr-explanation',
          title: 'Explanation by Shaykh Abdur-Razzaq Al-Badr',
          author: 'Abdur-Razzaq Al-Badr',
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/The-Explanation-of-the-Nullifiers-of-Islam-Sh.-Abdur-Razzaq-Al-Badr.pdf',
        },
      ],
    },
  },
  {
    id: 'usool-sittah',
    title: 'Al-Usool As-Sittah (The Six Foundations)',
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1750',
    description:
      'A concise text outlining six fundamental principles that distinguish the path of the believers from the disbelievers.',
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-10-10T16:45:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Six-Foundations-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'uthaymeen-explanation',
          title: 'Explanation by Shaykh Ibn Uthaymeen',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/Exp.-of-the-Six-Foundations-Sh.-al-Uthaymeen.pdf',
        },
      ],
    },
  },
  {
    id: 'kashf-shubuhat',
    title: 'Kashf Ash-Shubahat (Removal of Doubts)',
    author: 'Shaykh Muhammad Ibn Abdul-Wahhab رحمه الله',
    publishedDate: '1750',
    description:
      'A valuable text that addresses and refutes common misconceptions and doubts regarding monotheism (Tawheed).',
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-08-22T13:20:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/04/Removal-of-Doubts-Sh.-Muhammad-ibn-Abdul-Wahhab.pdf',
      },
      explanations: [
        {
          id: 'uthaymeen-explanation',
          title: 'Explanation by Shaykh Ibn Uthaymeen',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/04/Explanation-of-Removal-of-Doubts-Sh.-Muhammad-al-Uthaymeen.pdf',
        },
      ],
    },
  },
  {
    id: 'aqeedah-wasitiyyah',
    title: 'Al-Aqeedatu Al-Wasitiyyah',
    author: 'Shaykh Al-Islam Ibn Taymiyyah رحمه الله',
    publishedDate: '1306',
    description:
      "A comprehensive text outlining the core beliefs of Ahlus-Sunnah wal-Jama'ah regarding Allah's names and attributes.",
    coverImageUrl: '/bookicon.png',
    categories: ['aqeedah'],
    language: 'English',
    dateAdded: '2023-11-25T09:30:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://darpdfs.org/wp-content/uploads/2020/03/Aqeedah-Al-Wasitiyyah-Sh.-Ibn-Taymiyyah.pdf',
      },
      explanations: [
        {
          id: 'uthaymeen-explanation-vol1',
          title: 'Explanation by Shaykh Ibn Uthaymeen (Vol. 1)',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/Al-Aqidah-Al-Wasitiyyah-Exp.-Sh.-Al-Uthaymeen-Vol.-1-compressed.pdf',
        },
        {
          id: 'uthaymeen-explanation-vol2',
          title: 'Explanation by Shaykh Ibn Uthaymeen (Vol. 2)',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/storage/2023/12/Al-Aqidah-Al-Wasitiyyah-Exp.-Sh.-Al-Uthaymeen-Vol.-2-compressed.pdf',
        },
      ],
      videos: [
        {
          id: 'wasitiyyah-playlist',
          title: 'Video Explanation Series',
          url: 'https://www.youtube.com/playlist?list=PLGr1iRQGmNlWa_4pxr4fQJM1cqgQePfQj',
        },
      ],
    },
  },

  // Fiqh Books
  {
    id: 'conditions-pillars-prayer',
    title: 'Conditions and Pillars of Prayer',
    author: 'Shaykh Abdul Aziz ibn Abdullah ibn Baz رحمه الله',
    publishedDate: '1990',
    description:
      'A comprehensive guide on the conditions, pillars, and obligations of prayer according to the Quran and Sunnah.',
    coverImageUrl: '/bookicon.png',
    categories: ['fiqh'],
    language: 'English',
    dateAdded: '2023-08-15T11:25:00Z',
    resources: {
      matn: {
        title: 'Complete Text',
        pdfUrl:
          'https://abdurrahmanorg.files.wordpress.com/2014/09/the-conditions-and-pillars-and-obligations-of-the-prayer-ibn-baaz.pdf',
      },
      videos: [
        {
          id: 'prayer-series',
          title: 'Video Explanation of Prayer',
          url: 'https://www.youtube.com/playlist?list=PLUa1FE1E3AYs6yQQHNlP2c78jI9kMiV9E',
        },
      ],
    },
  },
  {
    id: 'fiqh-wudhu',
    title: 'The Fiqh of Wudhu (Ablution)',
    author: 'Shaykh Muhammad ibn Salih al-Uthaymeen رحمه الله',
    publishedDate: '1995',
    description:
      'A detailed explanation of the proper method of performing wudhu according to the Sunnah of the Prophet ﷺ.',
    coverImageUrl: '/bookicon.png',
    categories: ['fiqh'],
    language: 'English',
    dateAdded: '2023-07-20T09:40:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Explanation',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://islampdfs.files.wordpress.com/2021/02/thefiqhofpurification-ibnothaymeenpdf.pdf',
        },
      ],
    },
  },
  {
    id: 'fiqh-salah',
    title: "The Prophet's Prayer Described",
    author: 'Shaykh Muhammad Nasiruddin al-Albani رحمه الله',
    publishedDate: '1992',
    description:
      "A detailed description of the Prophet's ﷺ prayer from beginning to end, compiled from authentic hadiths.",
    coverImageUrl: '/bookicon.png',
    categories: ['fiqh'],
    language: 'English',
    dateAdded: '2023-06-18T15:20:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Muhammad Nasiruddin al-Albani',
          pdfUrl:
            'https://www.kalamullah.com/Books/The%20Prophets%20Prayer%20Described%20-%20Naasir%20ud-Deen%20al-Albaani.pdf',
        },
      ],
      videos: [
        {
          id: 'prayer-playlist',
          title: "Video Series on Prophet's Prayer",
          url: 'https://www.youtube.com/playlist?list=PLGr1FKu71VB9_FECnb_9HmUkGuxoVtQWY',
        },
      ],
    },
  },

  // Hadith Books
  {
    id: '40-hadith-nawawi',
    title: 'The Forty Hadith of Imam Nawawi',
    author: 'Imam Yahya ibn Sharaf an-Nawawi رحمه الله',
    publishedDate: '1270',
    description:
      'A collection of forty foundational hadiths covering the most important aspects of Islamic faith and practice.',
    coverImageUrl: '/bookicon.png',
    categories: ['hadith'],
    language: 'English',
    dateAdded: '2023-10-05T13:15:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://abdurrahmanorg.files.wordpress.com/2014/08/40-hadith-arabic-english-an-nawawi.pdf',
      },
      explanations: [
        {
          id: 'ibn-daqiq-explanation',
          title: 'Commentary by Ibn Daqiq al-Eid',
          author: 'Ibn Daqiq al-Eid',
          pdfUrl:
            'https://www.kalamullah.com/Books/Commentary%20on%20the%20Forty%20Hadith%20of%20Al-Nawawi%20-%20Ibn%20Daqiq%20al-Id.pdf',
        },
        {
          id: 'jamaal-zarabozo-explanation',
          title: 'Commentary by Jamaal al-Din Zarabozo',
          author: 'Jamaal al-Din Zarabozo',
          pdfUrl:
            'https://www.kalamullah.com/Books/Commentary%20on%20the%20Forty%20Hadith%20of%20Al-Nawawi%20-%20Jamaal%20al-Din%20Zarabozo.pdf',
        },
      ],
      videos: [
        {
          id: 'nawawi-playlist',
          title: 'Video Explanation Series',
          url: 'https://www.youtube.com/playlist?list=PLuEq3cY_xB4CZ-SGomH-PLvCKQjxLX9zX',
        },
      ],
    },
  },
  {
    id: 'al-bayquniyyah',
    title: 'Al-Bayquniyyah (The Bayquniyyah Poem)',
    author: 'Imam Taha ibn Muhammad al-Bayquni رحمه الله',
    publishedDate: '1625',
    description:
      'A concise thirty-four line didactic poem covering the classifications of hadith and the terminology of hadith sciences.',
    coverImageUrl: '/bookicon.png',
    categories: ['hadith'],
    language: 'English',
    dateAdded: '2023-09-10T08:30:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://abdurrahmanorg.files.wordpress.com/2014/08/bayquniyyah-poem-arabic-text.pdf',
      },
      explanations: [
        {
          id: 'main-explanation',
          title: 'Explanation of Al-Bayquniyyah',
          author: 'Various Scholars',
          pdfUrl:
            'https://abdurrahmanorg.files.wordpress.com/2014/08/bayquniyyah-ibn-hajr-ibn-uthaymeen-with-translation.pdf',
        },
      ],
    },
  },
  {
    id: 'riyad-us-saliheen',
    title: 'Riyad us-Saliheen (Gardens of the Righteous)',
    author: 'Imam Yahya ibn Sharaf an-Nawawi رحمه الله',
    publishedDate: '1270',
    description:
      'A collection of approximately 1900 authentic hadiths arranged in 372 chapters, covering various aspects of Islamic life and ethics.',
    coverImageUrl: '/bookicon.png',
    categories: ['hadith'],
    language: 'English',
    dateAdded: '2023-05-15T10:20:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book with Translation',
          author: 'Imam Nawawi',
          pdfUrl: 'https://www.kalamullah.com/Books/Riyad-us-Saliheen.pdf',
        },
      ],
      videos: [
        {
          id: 'riyad-playlist',
          title: 'Video Commentary Series',
          url: 'https://www.youtube.com/playlist?list=PLo8-JRSO3j93SMfp4QU7IRjVDzkWt6WxO',
        },
      ],
    },
  },

  // Tafsir Books
  {
    id: 'tafsir-ibn-kathir',
    title: 'Tafsir Ibn Kathir (Abridged)',
    author: 'Imam Ismail Ibn Kathir رحمه الله',
    publishedDate: '1370',
    description:
      "One of the most respected and accepted explanations of the Qur'an in the entire world, based primarily on the Prophet's ﷺ statements and those of his Companions.",
    coverImageUrl: '/bookicon.png',
    categories: ['tafsir'],
    language: 'English',
    dateAdded: '2023-11-30T09:45:00Z',
    resources: {
      explanations: [
        {
          id: 'volume-1',
          title: 'Volume 1 (Surah Al-Fatihah to Al-Baqarah)',
          author: 'Ismail Ibn Kathir',
          pdfUrl:
            'https://www.kalamullah.com/Books/Tafsir%20Ibn%20Kathir/Tafsir%20Ibn%20Kathir%20all%2010%20volumes.pdf',
        },
      ],
      videos: [
        {
          id: 'ibn-kathir-playlist',
          title: 'Tafsir Ibn Kathir Video Series',
          url: 'https://www.youtube.com/playlist?list=PLuEq3cY_xB4C8iQx0Otu1AhH9Vta3yy3H',
        },
      ],
    },
  },
  {
    id: 'tafsir-as-sadi',
    title: "Tafsir As-Sa'di (Taysir al-Karim ar-Rahman)",
    author: "Shaykh Abdur Rahman ibn Nasir As-Sa'di رحمه الله",
    publishedDate: '1950',
    description:
      "A concise and accessible tafsir focusing on understanding the meanings of the Qur'an, with special attention to lessons and rulings derived from verses.",
    coverImageUrl: '/bookicon.png',
    categories: ['tafsir'],
    language: 'English',
    dateAdded: '2023-06-25T14:10:00Z',
    resources: {
      explanations: [
        {
          id: 'volume-1',
          title: 'Volume 1',
          author: "Abdur Rahman ibn Nasir As-Sa'di",
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/04/Tafsir-As-Sadi-Parts-1-2-3.pdf',
        },
        {
          id: 'volume-2',
          title: 'Volume 2',
          author: "Abdur Rahman ibn Nasir As-Sa'di",
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/04/Tafsir-As-Sadi-Parts-4-5-6.pdf',
        },
        {
          id: 'volume-3',
          title: 'Volume 3',
          author: "Abdur Rahman ibn Nasir As-Sa'di",
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/04/Tafsir-As-Sadi-Parts-7-8-9.pdf',
        },
      ],
    },
  },
  {
    id: 'tafsir-juz-amma',
    title: "Tafsir of Juz' Amma",
    author: 'Shaykh Muhammad ibn Salih al-Uthaymeen رحمه الله',
    publishedDate: '1990',
    description:
      "A detailed explanation of the 30th part of the Qur'an, containing the short surahs that are frequently recited in the daily prayers.",
    coverImageUrl: '/bookicon.png',
    categories: ['tafsir'],
    language: 'English',
    dateAdded: '2023-07-30T11:50:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Explanation',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl:
            'https://darpdfs.org/wp-content/uploads/2020/04/Explanation-of-the-Three-Final-Chapters-of-the-Quran-Sh.-Ibn-Al-Uthaymeen.pdf',
        },
      ],
      videos: [
        {
          id: 'juz-amma-playlist',
          title: "Juz' Amma Video Explanation",
          url: 'https://www.youtube.com/playlist?list=PLo8-JRSO3j93M_mC3nDEbYKh6QcjAsuz7',
        },
      ],
    },
  },

  // Tazkiyah Books
  {
    id: 'diseases-of-heart',
    title: 'Diseases of the Hearts and Their Cures',
    author: 'Imam Ibn Qayyim al-Jawziyyah رحمه الله',
    publishedDate: '1350',
    description:
      'A profound work discussing spiritual ailments like arrogance, envy, and showing off, along with practical remedies from the Quran and Sunnah.',
    coverImageUrl: '/bookicon.png',
    categories: ['tazkiyah'],
    language: 'English',
    dateAdded: '2023-08-05T16:30:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Ibn Qayyim al-Jawziyyah',
          pdfUrl:
            'https://kalamullah.com/Books/Diseases%20of%20the%20Hearts%20and%20Their%20Cures.pdf',
        },
      ],
      videos: [
        {
          id: 'heart-diseases-playlist',
          title: 'Video Lectures on Heart Diseases',
          url: 'https://www.youtube.com/playlist?list=PLuEq3cY_xB4BiN2J_F7kCbdWE7__W6ObX',
        },
      ],
    },
  },
  {
    id: 'patience-gratitude',
    title: 'Patience and Gratitude',
    author: 'Imam Ibn Qayyim al-Jawziyyah رحمه الله',
    publishedDate: '1350',
    description:
      'A comprehensive analysis of the virtues of patience and gratitude, two fundamental qualities for spiritual growth in Islam.',
    coverImageUrl: '/bookicon.png',
    categories: ['tazkiyah'],
    language: 'English',
    dateAdded: '2023-05-12T08:25:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Ibn Qayyim al-Jawziyyah',
          pdfUrl: 'https://kalamullah.com/Books/Patience%20and%20Gratitude.pdf',
        },
      ],
    },
  },
  {
    id: 'purification-of-soul',
    title: 'Purification of the Soul',
    author: 'Various Scholars',
    publishedDate: '2000',
    description:
      'A compilation of texts from Ibn Rajab, Ibn Al-Qayyim, and Al-Ghazali on spiritual purification and character refinement.',
    coverImageUrl: '/bookicon.png',
    categories: ['tazkiyah'],
    language: 'English',
    dateAdded: '2023-09-20T13:40:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Compilation',
          pdfUrl:
            'https://kalamullah.com/Books/Purification%20Of%20The%20Soul.pdf',
        },
      ],
      videos: [
        {
          id: 'purification-playlist',
          title: 'Purification of the Soul Lectures',
          url: 'https://www.youtube.com/playlist?list=PLUa1FE1E3AYs2eeQEVFlR9GTmpwQb_ZQL',
        },
      ],
    },
  },

  // Seerah Books
  {
    id: 'sealed-nectar',
    title: 'The Sealed Nectar (Ar-Raheeq Al-Makhtum)',
    author: 'Safiur Rahman Mubarakpuri رحمه الله',
    publishedDate: '1979',
    description:
      'An award-winning biography of Prophet Muhammad ﷺ covering his life in detail from before his birth until his death.',
    coverImageUrl: '/bookicon.png',
    categories: ['seerah'],
    language: 'English',
    dateAdded: '2023-07-25T09:30:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Safiur Rahman Mubarakpuri',
          pdfUrl: 'https://www.kalamullah.com/Books/The%20Sealed%20Nectar.pdf',
        },
      ],
      videos: [
        {
          id: 'sealed-nectar-playlist',
          title: 'Sealed Nectar Video Series',
          url: 'https://www.youtube.com/playlist?list=PLAEF0577CC51CD3F',
        },
      ],
    },
  },
  {
    id: 'muhammad-man-prophet',
    title: 'Muhammad: His Life Based on the Earliest Sources',
    author: 'Martin Lings',
    publishedDate: '1983',
    description:
      'A highly detailed biography of the Prophet Muhammad ﷺ drawing exclusively on early sources and written in narrative style.',
    coverImageUrl: '/bookicon.png',
    categories: ['seerah'],
    language: 'English',
    dateAdded: '2023-06-10T15:15:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Martin Lings',
          pdfUrl:
            'https://www.kalamullah.com/Books/Muhammad%20His%20Life%20Based%20on%20the%20Earliest%20Sources.pdf',
        },
      ],
    },
  },
  {
    id: 'noble-life-prophet',
    title: 'Noble Life of the Prophet',
    author: 'Dr. Ali Muhammad as-Sallaabee',
    publishedDate: '2005',
    description:
      'A comprehensive multi-volume biography of the Prophet Muhammad ﷺ with authenticity given to the narrations.',
    coverImageUrl: '/bookicon.png',
    categories: ['seerah'],
    language: 'English',
    dateAdded: '2023-10-22T10:35:00Z',
    resources: {
      explanations: [
        {
          id: 'volume-1',
          title: 'Volume 1',
          author: 'Ali Muhammad as-Sallaabee',
          pdfUrl:
            'https://kalamullah.com/Books/Noble%20Life%20of%20The%20Prophet%201.pdf',
        },
        {
          id: 'volume-2',
          title: 'Volume 2',
          author: 'Ali Muhammad as-Sallaabee',
          pdfUrl:
            'https://kalamullah.com/Books/Noble%20Life%20of%20The%20Prophet%202.pdf',
        },
        {
          id: 'volume-3',
          title: 'Volume 3',
          author: 'Ali Muhammad as-Sallaabee',
          pdfUrl:
            'https://kalamullah.com/Books/Noble%20Life%20of%20The%20Prophet%203.pdf',
        },
      ],
    },
  },

  // Manners & Etiquettes (Replacing Comparative Religions)
  {
    id: 'islamic-etiquettes',
    title: 'Islamic Manners and Etiquettes',
    author: 'Shaykh Abdul-Fattah Abu Ghuddah رحمه الله',
    publishedDate: '1990',
    description:
      'A collection of authentic hadiths and narrations on Islamic etiquettes for various aspects of daily life.',
    coverImageUrl: '/bookicon.png',
    categories: ['manners'],
    language: 'English',
    dateAdded: '2023-08-18T14:20:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Abdul-Fattah Abu Ghuddah',
          pdfUrl:
            'https://ia802900.us.archive.org/14/items/IslamicEtiquettesAGuideToGoodManners/Islamic%20Etiquettes%20A%20Guide%20to%20Good%20Manners.pdf',
        },
      ],
    },
  },
  {
    id: 'islamic-personality',
    title: 'Building the Islamic Personality',
    author: 'Shaykh Muhammad ibn Salih al-Uthaymeen رحمه الله',
    publishedDate: '1995',
    description:
      'A guide to developing good character and manners according to Islamic teachings.',
    coverImageUrl: '/bookicon.png',
    categories: ['manners'],
    language: 'English',
    dateAdded: '2023-07-15T11:10:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Muhammad ibn Salih al-Uthaymeen',
          pdfUrl: 'https://www.kalamullah.com/character.html',
        },
      ],
      videos: [
        {
          id: 'character-playlist',
          title: 'Lectures on Islamic Character',
          url: 'https://www.youtube.com/playlist?list=PLuEq3cY_xB4ANXQ_40q1elTUNV0gFqP0V',
        },
      ],
    },
  },
  {
    id: 'manners-of-seeking-knowledge',
    title: 'The Etiquette of Seeking Knowledge',
    author: 'Shaykh Bakr Abu Zayd رحمه الله',
    publishedDate: '1995',
    description:
      'A guide on the proper manners and etiquettes that a student of knowledge should adopt in his or her pursuit of Islamic knowledge.',
    coverImageUrl: '/bookicon.png',
    categories: ['manners'],
    language: 'English',
    dateAdded: '2023-09-25T10:30:00Z',
    resources: {
      matn: {
        title: 'Original Text',
        pdfUrl:
          'https://archive.org/download/HILYATULTALIBILM/HILYATULTALIBILM%20%281%29.pdf',
      },
      explanations: [
        {
          id: 'main-text',
          title: 'English Translation',
          author: 'Bakr Abu Zayd',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_The_Etiquette_of_Seeking_Knowledge.pdf',
        },
      ],
    },
  },

  // Fatwas (Replacing Contemporary Issues)
  {
    id: 'fatawa-islamiyah-vol1',
    title: 'Fatawa Islamiyah - Volume 1',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'A collection of religious verdicts on matters of creed, worship, and transactions issued by major scholars including Bin Baz, Ibn Uthaymeen, and Ibn Jibreen.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-05T08:35:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 1 - Creed',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_1.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol2',
    title: 'Fatawa Islamiyah - Volume 2',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts focusing on prayer, purification, and other acts of worship.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-06T08:40:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 2 - Prayer',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_2.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol3',
    title: 'Fatawa Islamiyah - Volume 3',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts on zakat, fasting, Hajj, and other aspects of worship.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-07T08:45:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 3 - Zakah and Fasting',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_3.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol4',
    title: 'Fatawa Islamiyah - Volume 4',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts on financial transactions, marriage, and family matters.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-08T08:50:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 4 - Transactions',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_4.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol5',
    title: 'Fatawa Islamiyah - Volume 5',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts on inheritance, criminal law, and governmental affairs.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-09T08:55:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 5 - Inheritance',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_5.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol6',
    title: 'Fatawa Islamiyah - Volume 6',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts on contemporary issues, medicine, and modern technologies.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-10T09:00:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 6 - Contemporary Issues',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_6.pdf',
        },
      ],
    },
  },
  {
    id: 'fatawa-islamiyah-vol7',
    title: 'Fatawa Islamiyah - Volume 7',
    author: 'Scholars of the Standing Committee',
    publishedDate: '2000',
    description:
      'Religious verdicts on miscellaneous topics including social interactions, clothing, and food.',
    coverImageUrl: '/bookicon.png',
    categories: ['fatwas'],
    language: 'English',
    dateAdded: '2023-11-11T09:05:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Volume 7 - Miscellaneous',
          author: 'Various Scholars',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Fatawa_Islamiyah_Vol_7.pdf',
        },
      ],
    },
  },

  // Children's Education Books
  {
    id: 'fortress-muslim-children',
    title: 'Fortress of the Muslim for Children',
    author: 'Compiled by various scholars',
    publishedDate: '2010',
    description:
      'A collection of essential daily duas and remembrances from the Quran and Sunnah, adapted for children.',
    coverImageUrl: '/bookicon.png',
    categories: ['children'],
    language: 'English',
    dateAdded: '2023-10-15T13:25:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Various',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Hisnul_Muslim_for_kids.pdf',
        },
      ],
    },
  },
  {
    id: 'stories-prophets-children',
    title: 'Stories of the Prophets for Children',
    author: 'Suzanne E. Haneef',
    publishedDate: '2002',
    description:
      "Stories about the prophets mentioned in the Quran, simplified for children's understanding.",
    coverImageUrl: '/bookicon.png',
    categories: ['children'],
    language: 'English',
    dateAdded: '2023-09-18T11:30:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Suzanne E. Haneef',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Stories_Of_The_Prophets_Ibn_Kathir.pdf',
        },
      ],
      videos: [
        {
          id: 'prophets-stories-playlist',
          title: 'Animated Stories of the Prophets',
          url: 'https://www.youtube.com/playlist?list=PLBFcG4eYGVF1bQm-i6qgTNF9SspXSM2XH',
        },
      ],
    },
  },
  {
    id: 'islamic-studies-children',
    title: 'Islamic Studies for Children',
    author: 'Molvi Abdul Aziz',
    publishedDate: '2008',
    description:
      'A comprehensive introduction to the basics of Islam designed specifically for children.',
    coverImageUrl: '/bookicon.png',
    categories: ['children'],
    language: 'English',
    dateAdded: '2023-08-28T09:50:00Z',
    resources: {
      explanations: [
        {
          id: 'main-text',
          title: 'Complete Book',
          author: 'Molvi Abdul Aziz',
          pdfUrl:
            'https://d1.islamhouse.com/data/en/ih_books/single/en_Islamic_Studies_textbook.pdf',
        },
      ],
    },
  },
];

// Categories with their display names and descriptions
// Don't forget to update the bookCategories array to match the new categories
export const bookCategories = [
  {
    id: 'aqeedah',
    title: 'Aqeedah',
    description: 'Books on Islamic beliefs and creed',
    imageUrl: '/bookicon.png',
  },
  {
    id: 'fiqh',
    title: 'Fiqh',
    description: 'Books on Islamic jurisprudence and rulings',
    imageUrl: '/library.jpg',
  },
  {
    id: 'hadith',
    title: 'Hadith',
    description: 'Collections of sayings and actions of Prophet Muhammad ﷺ',
    imageUrl: '/masjidNabawi.jpg',
  },
  {
    id: 'tafsir',
    title: 'Tafsir',
    description: 'Exegesis and interpretation of the Quran',
    imageUrl: '/quran.png',
  },
  {
    id: 'tazkiyah',
    title: 'Tazkiyah',
    description: 'Purification of the heart, dua, repentance',
    imageUrl: '/dhikr.png',
  },
  {
    id: 'seerah',
    title: 'Seerah',
    description: 'Life of the Prophet (ﷺ) and companions',
    imageUrl: '/masjidNabawi.jpg',
  },
  {
    id: 'manners',
    title: 'Manners & Etiquettes',
    description: 'Islamic etiquette and character development',
    imageUrl: '/bookicon.png',
  },
  {
    id: 'fatwas',
    title: 'Fatwas',
    description: 'Religious verdicts by major scholars',
    imageUrl: '/pen.png',
  },
  {
    id: 'children',
    title: "Children's Education",
    description: 'Simplified Islamic books',
    imageUrl: '/bookicon.png',
  },
];

// Helper functions to filter books
export const getBooksByCategory = (categoryId: string): Book[] => {
  return books.filter((book) => book.categories.includes(categoryId));
};

export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};

export const getAllBooks = (): Book[] => {
  return books;
};

// Get the most recently added books
export const getRecentlyAddedBooks = (limit: number = 4): Book[] => {
  return [...books]
    .sort(
      (a, b) =>
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
    )
    .slice(0, limit);
};

export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.description.toLowerCase().includes(lowercaseQuery),
  );
};
