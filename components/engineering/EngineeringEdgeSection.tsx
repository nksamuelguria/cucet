import Carousel from "./Carousel";

type EdgeItem = {
  number: string;
  heading: string;
  body: string;
};

const EDGE_ITEMS: EdgeItem[] = [
  {
    number: "01",
    heading: "ABET-Accredited Engineering Programs",
    body: "The ABET-accredited engineering programs, including B.E. Computer Science and Engineering, B.E. Chemical Engineering and B.E. Electronics and Communication Engineering at Chandigarh University, demonstrate a commitment to delivering quality education, innovation-driven learning, and globally relevant engineering competencies.",
  },
  {
    number: "02",
    heading: "Globally Relevant, Industry-Based Curriculum",
    body: "Our engineering programs are developed with industry leaders to suit the changing industry needs so that the students are prepared to face real-world challenges.",
  },
  {
    number: "03",
    heading: "Premier Placements in the World's Leading Tech Companies",
    body: "The strategic alliances with industry leaders such as Google, Microsoft, Adobe, Intel, IBM, and many other top corporations offer unmatched placement and internship opportunities, giving our students an advantage to succeed professionally.",
  },
  {
    number: "04",
    heading: "Research Opportunities in 60+ Countries",
    body: "Our students have an opportunity to explore the global technology environment and pursue research internships in the fields of AI, cybersecurity, sustainability, among others, through more than 250 academic partnerships with prestigious foreign universities in over 60 countries.",
  },
  {
    number: "05",
    heading: "Real-World Projects",
    body: "We focus on experiential learning, where 40 percent of the curriculum is allocated to capstone projects, global certifications, value-added courses, industry visits, internships, industry workshops, and national and international hackathons.",
  },
  {
    number: "06",
    heading: "530+ International Collaborations in 100+ Countries",
    body: "We have vast international alliances that provide the students with the opportunity to pursue articulation programs, semester exchange, among other international programs.",
  },
  {
    number: "07",
    heading: "980+ Industry Experts for Mentorship",
    body: "With more than 980 industry leaders from the world's leading multinational companies on our Corporate Advisory Board, Students of Best Engineering College in Punjab, India get the opportunity to be on top of the emerging trends with masterclasses, seminars, and industry mentorship guiding them in their academic pursuits and business initiatives.",
  },
  {
    number: "08",
    heading: "Technology Business Incubator",
    body: "The Technology Business Incubator at CU supports student-led startups with seed funding and access to the valuable industry networks to make them become successful in their entrepreneurial endeavours.",
  },
  {
    number: "09",
    heading: "15+ Industry-Collaborated Centres of Excellence",
    body: "Our Centres of Excellence have been established in collaboration with global giants and are dedicated to conducting innovative research and advances in fields like artificial intelligence, the Internet of Things, robotics, aeronautics, material engineering, and others.",
  },
];

export default function EngineeringEdgeSection() {
  return (
    <section className="edge-sec pt-115">
      <div className="container">
        <div className="subHeading text-center">
          <h3>Chandigarh University Engineering Edge</h3>
        </div>
      </div>
      <div className="ps-188 position-relative">
        <Carousel className="edge-slider">
          {EDGE_ITEMS.map((item) => (
            <div className="edge-item" key={item.number}>
              <h4>{item.heading}</h4>
              <p>{item.body}</p>
              <span>{item.number}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
