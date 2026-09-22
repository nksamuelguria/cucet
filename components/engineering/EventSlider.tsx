"use client";

import Carousel from "./Carousel";

type EventItem = {
  bg: string;
  title: string;
  body: string;
};

const EVENTS: EventItem[] = [
  {
    bg: "/engineering/imgs-new/nasa-bg.jpg",
    title: "NASA Space Apps Challenge",
    body: "Over 200+ brilliant minds from across the country have come together at Chandigarh University to explore the cosmos, push boundaries, and tackle some of the most pressing challenges in space exploration.",
  },
  {
    bg: "/engineering/imgs-new/hackathon-bg.jpg",
    title: "Smart India Hackathon",
    body: "50+ Teams from different states of the nation are coming to the campus to showcase innovative solutions for the Problem Statements (PS) shared by the Ministry of Earth Sciences, Ministry of Ports, Shipping and Waterways, and India Meteorological Department.",
  },
  {
    bg: "/engineering/imgs-new/tekathon-bg.jpg",
    title: "Tekathon",
    body: "Chandigarh University witnessed innovation, collaboration, and some serious coding magic. From groundbreaking ideas to intense competition, Tekathon was a celebration of tech brilliance!",
  },
  {
    bg: "/engineering/imgs-new/zinnovatio-bg.jpg",
    title: "Zinnovatio 2.0",
    body: "Chandigarh University proudly hosted Zinnovatio 2.0 Hackathon, where brilliant young tech innovators collaborated to create solutions for a sustainable future. Focused on the UN Sustainable Development Goals (SDGs) — from climate action to clean water and sustainable cities — participants turned visionary ideas into real-world impact.",
  },
];

export default function EventSlider() {
  return (
    <Carousel className="event-slider" wrapAround>
      {EVENTS.map((event) => (
        <div className="ev-item" key={event.bg}
          style={{ backgroundImage: `url('${event.bg}')` }}>
          <div className="ev-item-wrapper">
            <h3>{event.title}</h3>
            <p>{event.body}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
