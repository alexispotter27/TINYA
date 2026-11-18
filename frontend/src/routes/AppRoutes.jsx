
import { Routes, Route, Navigate } from "react-router-dom";

// Existing public website pages
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Projects from "../pages/Projects";
import Events from "../pages/Events";
import Resources from "../pages/Resources";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import BlogArticle from "../pages/BlogArticle";
import NotFound from "../pages/NotFound";

// Application layouts
import WebsiteLayout from "../layouts/WebsiteLayout";
import PortalLayout from "../layouts/PortalLayout";
import AdminLayout from "../layouts/AdminLayout";

// Portal pages
import PortalHome from "../pages/portal/PortalHome";
import MembershipRegistration from "../pages/portal/MembershipRegistration";

// Admin pages
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/events" element={<Events />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Route>

      {/* Registration Portal */}
      <Route path="/portal" element={<PortalLayout />}>
        <Route index element={<PortalHome />} />

        <Route
          path="membership"
          element={<MembershipRegistration />}
        />

        {/* Temporary placeholders until their forms are implemented */}
        <Route
          path="volunteer"
          element={<ComingSoon title="Volunteer Registration" />}
        />

        <Route
          path="partnership"
          element={<ComingSoon title="Partnership Application" />}
        />
      </Route>

      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          index
          element={<Navigate to="dashboard" replace />}
        />

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function ComingSoon({ title }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="text-2xl font-bold text-green-950">
        {title}
      </h1>

      <p className="mt-3 text-gray-600">
        This registration section is currently under development.
      </p>
    </section>
  );
}
