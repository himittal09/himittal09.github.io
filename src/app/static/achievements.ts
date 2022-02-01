export interface Achievement {
  title: string;
  year: number;
  cretificateLink: string;
  displayOrder: number;
}

export const achievements: Achievement[] = [
  {
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC5.jpg?alt=media',
    displayOrder: 10,
    title: 'Won 1st Prize in “Coding Competition” in ‘DI-Tech Fest 2016’ organized by DIMAT.',
    year: 2017
  },
  {
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC7.jpg?alt=media',
    title: 'Won 1st Prize in “Presentation Maniac”, to prepare and present for an on spot topic organized by Disha College.',
    displayOrder: 20,
    year: 2016
  },
  {
    year: 2016,
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC4.jpg?alt=media',
    title: 'Attended one day workshop on “Competitive Mathematics” held in NIT Raipur.',
    displayOrder: 30
  },
  {
    year: 2017,
    displayOrder: 40,
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC3.jpg?alt=media',
    title: 'Contributed in Adore India (The Council which believes in Motivating Youth for Positive Action).'
  },
  {
    year: 2015,
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC6.jpg?alt=media',
    title: 'Won 1st Prize in “Inter-house Debate Competition” held in Hasdeo Public School.',
    displayOrder: 50
  },
  {
    cretificateLink: 'https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Certificates%2FC2.jpg?alt=media',
    year: 2016,
    displayOrder: 60,
    title: 'Participated in “Entrepreneurship Awareness Camp” organized by CITCON for NSTEDB.'
  }
];
