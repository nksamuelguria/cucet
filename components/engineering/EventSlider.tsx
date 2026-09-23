import Carousel from "./Carousel";

type EventItem = {
  /* The photo behind the card. It was a CSS background, which the browser
     fetches during the initial load even though this section sits eight
     screens down; as an <img> it can be lazy. */
  bg: string;
  bgSmall: string;
  key: string;
  title: string;
  body: string;
};

const EVENTS: EventItem[] = [
  {
    bg: "/engineering/imgs-new/nasa-bg.webp",
    bgSmall: "/engineering/imgs-new/nasa-bg-800.webp",
    key: "nasa-bg",
    title: "NASA Space Apps Challenge",
    body: "Over 200+ brilliant minds from across the country have come together at Chandigarh University to explore the cosmos, push boundaries, and tackle some of the most pressing challenges in space exploration.",
  },
  {
    bg: "/engineering/imgs-new/hackathon-bg.webp",
    bgSmall: "/engineering/imgs-new/hackathon-bg-800.webp",
    key: "hackathon-bg",
    title: "Smart India Hackathon",
    body: "50+ Teams from different states of the nation are coming to the campus to showcase innovative solutions for the Problem Statements (PS) shared by the Ministry of Earth Sciences, Ministry of Ports, Shipping and Waterways, and India Meteorological Department.",
  },
  {
    bg: "/engineering/imgs-new/tekathon-bg.webp",
    bgSmall: "/engineering/imgs-new/tekathon-bg-800.webp",
    key: "tekathon-bg",
    title: "Tekathon",
    body: "Chandigarh University witnessed innovation, collaboration, and some serious coding magic. From groundbreaking ideas to intense competition, Tekathon was a celebration of tech brilliance!",
  },
  {
    bg: "/engineering/imgs-new/zinnovatio-bg.webp",
    bgSmall: "/engineering/imgs-new/zinnovatio-bg-800.webp",
    key: "zinnovatio-bg",
    title: "Zinnovatio 2.0",
    body: "Chandigarh University proudly hosted Zinnovatio 2.0 Hackathon, where brilliant young tech innovators collaborated to create solutions for a sustainable future. Focused on the UN Sustainable Development Goals (SDGs) — from climate action to clean water and sustainable cities — participants turned visionary ideas into real-world impact.",
  },
];

export default function EventSlider() {
  return (
    <Carousel className="event-slider" wrapAround>
      {EVENTS.map((event) => (
        <div className="ev-item" key={event.key}>
          <img
            className="ev-bg"
            src={event.bg}
            srcSet={`${event.bgSmall} 800w, ${event.bg} 1920w`}
            sizes="100vw"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="ev-item-wrapper">
            <h3>{event.title}</h3>
            <p>{event.body}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
