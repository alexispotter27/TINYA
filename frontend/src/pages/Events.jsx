
import EventsHero from "../components/events/EventsHero";
import EventsOverview from "../components/events/EventsOverview";
import UpcomingEvents from "../components/events/UpcomingEvents";
import PastEvents from "../components/events/PastEvents";
import EventsGallery from "../components/events/EventsGallery";
import EventsCTA from "../components/events/EventsCTA";

export default function Events() {
  return (
    <main>
      <EventsHero />
      <EventsOverview />
      <UpcomingEvents />
      <PastEvents />
      <EventsGallery />
      <EventsCTA />

    </main>
  );
}
