const profileData = [
    {
      'id': 1,
      "name": "Chisom Chukwukwe",
      "profession": "UI/UX Designer",
      "description": "Hardworking and reliable UI/UX designer focused on going above and beyond to support teams and serve customers.",
      "fullDescription": "Hardworking and reliable UI/UX designer focused on going above and beyond to support teams and serve customers. Adept at improving user experiences by understanding user needs and translating them into practical, intuitive designs. Proficient in tools like Figma and Adobe XD, and always eager to learn new design trends.",
      "background": "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
      "profileImage": "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/chisomchukwukwe"
    },
    {
      'id': 2,
      "name": "Amara Nwokolo",
      "profession": "Graphic Designer",
      "description": "Creative graphic designer with a passion for visual storytelling.",
      "fullDescription": "Creative graphic designer with a passion for visual storytelling. Skilled in creating engaging content for social media, print, and digital marketing campaigns. Expert in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign. Known for delivering high-quality work under tight deadlines.",
      "background": "https://images.pexels.com/photos/1640794/pexels-photo-1640794.jpeg",
      "profileImage": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/amara.nwokolo"
    },
    {
      'id': 3,
      "name": "David Okeke",
      "profession": "Web Developer",
      "description": "Skilled web developer specializing in front-end technologies.",
      "fullDescription": "Skilled web developer specializing in front-end technologies. Experienced in building responsive, high-performance websites using modern JavaScript frameworks like React and Vue.js. Passionate about creating pixel-perfect designs and ensuring smooth user interactions across devices.",
      "background": "https://images.pexels.com/photos/1001647/pexels-photo-1001647.jpeg",
      "profileImage": "https://images.pexels.com/photos/1001647/pexels-photo-1001647.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/david.okeke"
    },
    {
      'id': 4,
      "name": "Ngozi Obi",
      "profession": "Product Manager",
      "description": "Detail-oriented product manager with experience in agile methodologies.",
      "fullDescription": "Detail-oriented product manager with experience in agile methodologies. Highly skilled at coordinating cross-functional teams, defining product roadmaps, and overseeing product development from ideation to launch. Known for delivering products that meet both user needs and business objectives.",
      "background": "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
      "profileImage": "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/ngozi.obi"
    },
    {
      'id': 5,
      "name": "Emeka Uzo",
      "profession": "Software Engineer",
      "description": "Dedicated software engineer with a focus on backend development.",
      "fullDescription": "Dedicated software engineer with a focus on backend development. Proficient in programming languages like Python, Java, and C#. Experienced in designing and developing scalable systems, RESTful APIs, and working with cloud platforms such as AWS and Azure.",
      "background": "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg",
      "profileImage": "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/emeka.uzo"
    },
    {
      'id': 6,
      "name": "Kemi Adebayo",
      "profession": "Data Analyst",
      "description": "Analytical data analyst experienced in data visualization.",
      "fullDescription": "Analytical data analyst experienced in data visualization. Skilled in transforming complex data into actionable insights using tools like Excel, SQL, and Tableau. Adept at presenting data-driven solutions to stakeholders and supporting decision-making processes with accurate data analysis.",
      "background": "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
      "profileImage": "https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/kemi.adebayo"
    },
    {
      'id': 7,
      "name": "Chinedu Eze",
      "profession": "Digital Marketer",
      "description": "Innovative digital marketer with a knack for social media strategies.",
      "fullDescription": "Innovative digital marketer with a knack for social media strategies. Highly skilled at boosting brand awareness and engagement through data-driven campaigns. Proficient in content marketing, SEO, SEM, and social media management, with a deep understanding of digital tools like Google Analytics and Facebook Ads.",
      "background": "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      "profileImage": "https://images.pexels.com/photos/1644775/pexels-photo-1644775.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/chinedu.eze"
    },
    {
      'id': 8,
      "name": "Ify Nnaji",
      "profession": "Content Writer",
      "description": "Passionate content writer creating engaging and informative articles.",
      "fullDescription": "Passionate content writer creating engaging and informative articles. Experienced in writing blog posts, articles, and copy for websites and social media. Specializes in crafting SEO-optimized content to drive traffic and increase online visibility.",
      "background": "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
      "profileImage": "https://images.pexels.com/photos/1181669/pexels-photo-1181669.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/ify.nnaji"
    },
    {
      'id': 9,
      "name": "Tunde Ogunleye",
      "profession": "SEO Specialist",
      "description": "Results-driven SEO specialist helping brands improve their online visibility.",
      "fullDescription": "Results-driven SEO specialist helping brands improve their online visibility. Proficient in optimizing websites for search engines, conducting keyword research, and implementing on-page and off-page SEO strategies. Experienced in analyzing website performance using tools like Google Search Console and Ahrefs.",
      "background": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      "profileImage": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/tunde.ogunleye"
    },
    {
      'id': 10,
      "name": "Adaobi Chukwu",
      "profession": "Mobile App Developer",
      "description": "Enthusiastic mobile app developer with experience in cross-platform apps.",
      "fullDescription": "Enthusiastic mobile app developer with experience in cross-platform apps. Skilled in using technologies like React Native and Flutter to build high-performance mobile applications. Dedicated to staying up-to-date with the latest trends in mobile app development and delivering user-friendly, scalable solutions.",
      "background": "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
      "profileImage": "https://images.pexels.com/photos/1644767/pexels-photo-1644767.jpeg?w=150&h=150",
      "profileLink": "https://facebook.com/adaobi.chukwu"
    }
  ]
  
  export default profileData;
  