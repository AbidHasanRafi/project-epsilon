import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import { Box, CircularProgress } from "@mui/material";

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/activities.json")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching activities", error));
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 sm:text-3xl sm:mb-6">
          Our Activities
        </h1>
        <Box borderBottom="1px solid #e0e0e0" my={1} />
        {loading ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-items-center">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </section>
        )}

        <section className="mt-12 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <img
              src="initiative.jpg"
              alt="Our Initiatives"
              className="w-full object-cover h-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Our Initiatives</h2>
              <p className="text-gray-700">
                In our voluntary organization, we took initiatives like taking
                quizzes in seminars, evaluating students, giving them prizes and
                certificates for encouragement. We also created a Facebook page
                to connect with students whenever they require assistance. We
                took many initiatives to provide students with quality
                educational resources free of cost for their benefits.
              </p>
              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <img
              src="volunteer.jpg"
              alt="Volunteer Opportunities"
              className="w-full object-cover h-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                Volunteer Opportunities
              </h2>
              <p className="text-gray-700">
                Join our team and make a difference! We offer various volunteer
                opportunities for individuals who are passionate about education
                and community outreach. Whether you want to mentor students,
                organize events, or contribute in other ways, there's a place
                for you in our organization.
              </p>
              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <img
              src="education.svg"
              alt="Educational Resources"
              className="w-full object-cover h-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Educational Resources</h2>
              <p className="text-gray-700">
                Access our collection of educational resources designed to
                support students in their learning journey. From study guides to
                online courses, we offer a wide range of materials covering
                various subjects and topics.
              </p>
              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <img
              src="upcoming.jpg"
              alt="Upcoming Events"
              className="w-full object-cover h-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-gray-700">
                Stay updated on our upcoming events and activities! We regularly
                host workshops, seminars, and other educational events to engage
                with the community and provide valuable learning opportunities.
              </p>
              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <img
              src="attention.jpg"
              alt="Attention Message"
              className="w-full object-cover h-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Attention Please!!</h2>
              <p className="text-gray-700">
                For the information of all, Epsilon is a non-political,
                non-government, voluntary organization. Epsilon is not
                subordinate to any single person or organization, so it is
                discouraged to contact any single person/organization using the
                Epsilon title. Note that Epsilon will not take responsibility
                for any harm or fraud by any third person / organization other
                than Epsilon!
                <br />
                <br />
                𝐍𝐨𝐭𝐞: 𝐄𝐩𝐬𝐢𝐥𝐨𝐧 𝐞𝐧𝐜𝐨𝐮𝐫𝐚𝐠𝐞 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐨𝐧 𝐨𝐮𝐫 𝐨𝐟𝐟𝐢𝐜𝐢𝐚𝐥
                𝐞𝐦𝐚𝐢𝐥/𝐩𝐚𝐠𝐞.
              </p>
              <div className="border-b border-gray-300 mt-4"></div>
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              title="Map"
              className="w-full h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231145.02324733726!2d89.19117168496403!3d25.14782566536986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce24469643ea3%3A0xb688d28b2f76292a!2sGobindaganj%20Upazila!5e0!3m2!1sen!2sbd!4v1713901058990!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivityPage;
